---
title: "Building Your Domain in Apex"
date: "2021-12-24"
description: "Applying OOP, SOLID, and the Builder pattern for better data creation"
--- 


Creating sObjects in Apex is easy. Building your domain is hard.


Every Salesforce builds software to create and update data. A good developer will also spend a considerable amount of time building quality unit tests. These tests are important. When I'm surrounded by quality tests, I feel more confident about the feature I'm adding. I feel motivated to refactor ugly code. I'm inclined to add my own tests so the next developer can feel as good as I did.

What's it like creating data in your org? Is it deliberate? These can be some code smells to look out for:
- Reason1
- Reason2
- Reason3

It makes me stressed to add my feature. I hesiste to refactor something I know I should - worried I'll break something I didn't think to manually test. And I struggle to navigate the dependencies that are need to create a good test method. 

I needed to rethink how I built sObjects. Going from an ugly, hard to read Telescoping Pattern:

```java
// Test Class
    @isTest 
    private static void someTest(){
        
        Account acc = TestDataFactory.createAccount('SamanCorp', 'Warm', 'CD656092', 'Prospect', false);
        acc.website = 'www.samanattar.com';
        insert acc;

        Contact con = TestDataFactory.createContact('Saman', 'BusinessMan', 'saman.attar@outlook.com', true);

        Opportunity opp = TestDataFactory.createOpportunity('BigOpportunity', acc.Id, con.Id, false);
        opp.StageName = 'Prospecting';
        opp.requiredField1__c = 'value';
        opp.requiredField2__c = 'value';
        opp.requiredField3__c = 'value';
        insert opp;

    }

```

To a legible Builder Pattern:
```java
// Test Class
    @isTest 
    private static void someTest(){

        Account acc = AccountBuilder()
                        .buildAndInsert(); 
        
        Contact con = ContactBuilder()
                        .buildAndInsert(); 

        Opportunity opp = OpportunityBuilder()
                            .withAccount(acc)
                            .withContact(con)
                            .withStage('Prospecting')
                            .build(); 
    }

```

# The Problem

As your Salesforce org grows, so do your sObjects and their rules. So why don't we have a clean, readable, and disciplined way to create our sObjects? I think the Builder pattern can help us get there. 


Think about what you'd need to write a unit test for an Opportunity stage change. You'd need an Opportunity with the required fields for that stage. Do you have them all memorized? Better stop and check! Your Opportunity needs a Contact, who needs an Account. Don't get that confused with a Contract, because we need one of those too! Did someone say User and Quote?


There's A LOT of data to create here. Finding and setting all the required field on the Opportunity is hard enough. Plus, I find it a waste of time to worry about passing paramters I don't care about. Sometimes I care what the contact's email is and sometimes I don't. And I NEVER want to worry about double checking that I passed in all the required parameters in the correct order. Talking to you ``` TestFactory.createTestUser() ```.

```java
    User u = TestDataFactory.createTestUser('Saman', 'Attar', true, 'saman.attar@email.com', 'anAlias', 'sama@sf.com.dev', true, false, true);
```

Literally what is going on up there? How did the original developer decide what fields to set default values on? Will I be able to insert the user record when it's in this state? Was it already inserted? I can take a reasonable guess at some of those parameters, but what are all the boolean values? Without a disciplined approach to creating data, our tests and thus our org will get out of hand.


# Getting Out of Hand - TestDataFactory

I got so annoyed writing out an example TestDataFactory implementation for this field note that I had to stop and remove it. Instead I'll just show how crazy it can get with a few calls to the TestDataFactory. 

```java
    @TestSetup
    private static void createData(){
        User u1 = TestDataFactory.createTestUser('Saman', 'Attar', true, 'saman.attar@email.com', 'anAlias', 'sama@sf.com.dev', true, false, true);
        User u2 = TestDataFactory.createTestUser(true);
        User u3 = TestDataFactory.createSystemAdmin('Saman', 'Attar' true, true);
        User u4 = TestDataFactory.createSystemAdmin('Saman', 'Attar', 'saman.attar@email.com', true, true);
        User u5 = TestDataFactory.createGeneralUser('Saman', 'Attar' 'saman.attar@email.com', true);
    }
```

Being able to overload methods is nice, but this is a nightmare. There's a lot going on here that I absolutely can't stand. 

- Overlapping domains in a low level / detail oriented class
- Low cohesion. These methods have very little reason to be in the same class with ones like ```createContact(...)``` and ```createAccount(...)```
- Endless reasons this class could change
- Hard to understand intent and tell methods apart


# ObjectMother

Although not an ideal final state, the first approach I would take here is to split this class into several classes that each have the bounded context of the domains and sObjects they represent. It's a really straightfoward approach - create an AccountTestDataFactory, a ContactDataFactory, and OpportunityDataFactory. 

```java
public class AccountTestDataFactory {

    public Account createAccount(){
        Account acc = new Account();
        return acc; // Excluding other fields for brevity 
    }

    public Account createAccount(String name){
        Account acc = new Account();
        acc.name = name; 
        return acc; // Excluding other fields for brevity
    }
}
```

```java
public class ContactTestDataFactory {

    public Contact createContact(){
        Contact con = new Contact();
        con.LastName = 'ContactLastName';
        con.FirstName = 'ContactFirstName';
        con.Email = 'first.last@email.com';
        return con;
    }

    public Contact createContact(String email){
        Contact con = createContact(); // to spice up the example, let's call the method we already
        con.Email = email;
        return con;
    }
}
```

```java
public class OpportunityTestDataFactory {
    public Opportunity createOpportunity(Id accountId){
        Opportunity opp = new Opportunity();
        opp.accountId = accountId;
        return opp;        
    }
    public Opportunity createOpportunity(Id accountId, Id contactId){
        ...
    }
    public Opportunity createOpportunityWithStage(Id accountId, Id contactId, String stageName){
        ...
    }
}
```

Put the confetti away. This is a little better, but still not great. I think we solved these problems:

- Improved cohesion. All the methods in the classes build the same sObject
- When this class changes it means the sObject it's named after has a new state
- One class per domain

However these problems still exist
- Hard to tell the methods apart 
- Which methods should be updated when there's new functionality?
- A lot of repetition
- Telescoping pattern
- Have to set fields I don't care about
- Have to go through the TestDataFactory to determine if a method is already there


Even with this approach, we have potential for the telescoping pattern to get out of hand. Similiar to what we did in the TestDataFactory, this is still possible:


```java
    @TestSetup
    private static void createData(){
        User u1 = UserTestDataFactory.createSystemAdmin('Saman', 'Attar' true, true);
        User u2 = UserTestDataFactory.createSystemAdmin('Saman', 'Attar', 'saman.attar@email.com', true, true);
        User u3 = UserTestDataFactory.createTestUser('Saman', 'Attar', true, 'saman.attar@email.com', 'anAlias', 'sama@sf.com.dev', true, false, true);
        User u4 = UserTestDataFactory.createTestUser(true);
        User u5 = UserTestDataFactory.createTestUser('Saman', 'Attar' 'saman.attar@email.com', 'anAlias', true);
    }
```

Okay, enough.

# Domain Builder

