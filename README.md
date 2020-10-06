# Work-Day-Scheduler

Explore the github [project repo](https://github.com/TommyWillen/Work-Day-Scheduler/)

View the [github-pages](https://tommywillen.github.io/Work-Day-Scheduler/)

## Table of Contents

- [Project Description](#Project-Description)
    - [Project Tasks](#Project-Tasks)
    - [Third Party APIs](#Third-Party-APIs)
    - [Responsive Time](#responsive-time)
    - [Local Storage and New Day Reset](#local-storage-and-new-day-reset)
    - [Video Tutorial](#Video-Tutorial)
- [Installation](#installation)

- [Roadmap](#roadmap)

- [License](#license)

- [Contact Me](#contact-me)

- [Acknowledgements](#acknowledgements)

- [Easter Egg!](#easter-egg!)

## Project Description
![Work Day Scheduler](/assets/Images-and-Gifs/Work-Day-Scheduler-Main.PNG)

### Project Tasks
For this project I was tasked with creating a work day scheduler using JQuesry and Moment.JS. I was asked to do the following:

- When the planner is opened, the current day is displayed (I added a refresh if it is a new day as well).
- Time blocks will be displayed for a typical business day
    - Each block will be color-coded depending on if it is the current hour, in the past, or future.
- The ability to record information into each time block and save it to local storage so that it would persist upon refresh
- A clear button that resets the calendar.

### Third Party APIs

For this project I used multiple 3rd party APIs to support my project, namely bootstrap, jquery, and moment.js.

I used the bootstrap library of classes to create the html elements for my scheduler. I also created my own stylesheet for any modifications I needed to make.

I used jquery's library of methods to speed up my DOM manupulation greatly shrinking my code and making it much easier to work with.

I used moment.js for the handy methods around current date and times.

I also used font awesomes sweet icon library to create the save buttons

### Responsive Time

I used moment.js methods to display the current day when the page loads. I also created a function that will automatically refresh the page and clear the calendar data if the day changes. Moment.js was also used to make the calendar responsive for the hour blocks. The blocks were linked to different style sheets depending on the time of day and would be gray if in the past, red if present, and green if in the future.

### Local Storage and New Day Reset

![Work Day Scheduler Gif](/assets/Images-and-Gifs/Work-Day-Scheduler-sample.gif)

I used jquery traversal methods to link the button to the textarea to save the information to local storage. I also used jquery to easily link the clear button to all of the text areas for easy clearing. The local storage variable was a single stringified object that stored the time element (in military time) and the text in the text area.

### Video Tutorial

Click the image to view my video feature tutorial:

[![Start screen to link to youtube video](/assets/Images-and-gifs/Work-Day-Scheduler-Main.PNG)](https://youtu.be/kvQkQhar2jo)

## Installation

Prerequisites\: None

Simply clone it from my repo\:

```
clone git@github.com:TommyWillen/Work-Day-Scheduler.git
```

## Roadmap

In the future I would like add a tab that makes it a two day calendar so someone can also plan a little ahead.

## License

[License](https://github.com/TommyWillen/Work-Day-Scheduler/blob/master/LICENSE)

## Contact Me

- [Email](TommyAllen1215@gmail.com)
- [Github Page](https://github.com/TommyWillen)
- [LinkedIn](https://www.linkedin.com/in/tommy-willen-12867b1b3/)

## Acknowledgements

For this project I would like to thank the following individuals\:

- John Young\: For introducing me to the joys of Javascrip!
- Dan Mont-Eton\: For the calm and patient support he provided in understanding my code and "talking me off the ledge" when I wanted to throw my computer at the wall. For also helping me find simple errors/solutions to tasks that I spent hours on.