# code_louisville_project_fewd2021
This is the repo for for the project that I made during Code Louisville - Front End Web Dev 2021

Its is a concept for a podcast website.

Its is broken into 4 total sections with one external link that leads to amazon.com(this is supposed to represent a store front for the podcast merch)

# Header Section - 
   The first section is the introduction area(header). This is where the user can see what the website is for and a logo detailing the podcast.
    Below that in the same section is a nav bar with 4 buttons: About, Meet the Hosts, Listen now, and Shop. Each of these buttons are hyperlinks to IDs attached to the different     h1 elements nested in each section. You will also notice that smooth scrolling has been applied to the entire page for a better user experience.
    
# About section -
   This section is where the user can read what the podcast is about. There is an image that increases and decreases in size based on the viewport.
    
# Meet the Hosts section - 
   This section is designed to meet the hosts of the podcast. Here the headshots of the hosts are visible and styled with Flexbox to contain the images, host names and bio to make    it more readable and less confusing to the user.
  

# Listen Now section -
  This section informs the user that they can listen to the podcast via four different links. Each link points to a different source where they can find this podcast. This section   also has a "Back to Top" button that will take the user back to the top of the page.


# Project requirements:

   **1** - There are a total of 3 animations that I created. The keyframes used start on css line 742 and are used as animations on lines 295, 562, 572, 610, and 620. These animate a yellow and brown planet found on the main screen in medium and large desktop views and are hidden on a mobile view to save space. There is one more animation viewable on all viewport sizes. This is a little green ship that floats across the screen right above the footer of the page.
    
   **2** - I used Flexbox and CSS Grid to house pictures and text. The first set of flexboxes are in the "Meet the Hosts" section page. there are two flexboxes containing headshots, names, and p elements wrapped by a third larger flex box. This is to allow the two bios to be displayed vertically and spaced evenly through the section. They display side by side in medium and large screen sizes and then stack when the viewport changes to a small size. The CSS grid is in the "Listen Now" section. It is used to display 4 podcast site links in a specified grid layout. This changes sizes going from small to medium viewports. It is held by yet another flexbox along with a paragraph element and changes from a horizontal layout to a vertical layout once again based on viewport size.
    
   **3** - Javascript is used to show/hide the menu at the top of the screen in a smaller view by clicking on the hamburger icon at the top right.
   
   **4** - Line 88 has an nth-child pseudo-class that styles the background of every other mobile menu item and applied a border radius
   
# Media Queries -
   
   The website was made with a **mobile first** approach. There are a total of two media queries that change the layout of the site at **medium** and **large** viewport sizes.
