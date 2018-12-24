---
layout: project
metaname: lemonpi-nav
title:  Navigation
company: LemonPI
description: Re-introducing the classic sidebar navigation to make way for a clearer information hierarchy.
year: 2018
overview: <p>LemonPI is software to enable marketeers to configure banners with dynamic content. My first large challenge here was to fix the busy UI users are presented with.</p>
personas: false
analysis: <p>Before I wanted to pick up any new functionality, I did an overview of the existing user journey and UI and it was clear that there was a lot of visual noise and confusion. Speaking to several users confirmed this.</p>
userflows: true
goals: <h3>Give customers a sense of control</h3> <ul> <li><p>Handle all price fluctuations (delivery, vouchers) before hitting the payment page to avoid any surprises.</p></li><li><p>Enable quick and easy editing of the order by using the checkout page as a central point of the flow. </p></li><li><p>Split major user actions apart, instead of having everything on one page and overwhelming the user.</p></li><li><p>Let the customer decide how they are communicated with.</p></li></ul> <h3>Keep the customer updated</h3> <ul> <li><p>Embrace more modern technologies to give users the choice of communication methods (push notifications, emails, agenda appointments). </p></li><li><p>Give everyone a centralised place for finding order information (order confirmation, order history, all orders available via scanning the user QR code).</p></li><li><p>Incorporate common reasons to contact the helpdesk into the UI (navigate to store, push notification if a store is having unusual hours on a day you plan to pick up the order, notifications if your order is delayed).</p></li></ul> <h3>Improve the store flow</h3> <ul> <li><p>Make the process easy for the customer. Nearly everyone has a phone, enable customers to pick up their delivery using their InterSport user QR code whilst logged into the website, instead of requiring official identification to be brought in.</p></li><li><p>Scanning QR codes is quicker and more accurate than manually entering data. It has the added benefit of giving flexibility during busy hours as a cash desk is not required, only a scanner is.</p></li><li><p>Consider omnichannel options, such as using the user QR code to pick up the package using the TAS in stores, or using GPS to notify store workers that a customer who has an order pending will soon be arriving.</p></li></ul>
userfloworiginaltext: <p>The original flow is very linear and brittle. The notable pains were around delivery selection and the lack of follow up options once the order was placed.</p>
userflowsuggestedtext: <p>The suggested flow is focused around two central pages. The checkout page is the central place for editing order details and giving the customer confirmation their order is correct before proceeding with payment.</p><p>The confirmation page doubles up as the order history page and becomes the central place for controlling the follow up, as well as keeping up to date with your orders.</p>
designs:
  - design:
      description: <p>Making the delivery option a clear choice and showing customers the affect it has on the total price.</p>
      img: design-1.png
      block: true
  - design:
      description: <p>Enabling quick access to store information and other features such as opening in Google Maps.</p>
      img: design-4.png
  - design:
      description: <p>Users can easily change their order options before confirming.</p>
      img: design-5.png
  - design:
      description: <p>The order confirmation page acts as a central place for managing orders and viewing their details.</p>
      img: design-6.png
      block: true
  - design:
      description: <p>My Account offers a quick link to the user card which can be used to quickly enter your details at the store.</p>
      img: design-myaccount.png
  - design:
      description: <p>The card leverages the native iOS wallet for quick access. An app specific implementation covers the other platforms.</p>
      img: design-7.png
      block: true
prototype: <p>App prototype video</p>
resources:
  - resource:
      filename: clickcollect.sketch
      name: Sketch template
  - resource:
      filename: clickcollect.prd
      name: Principle prototype
---
