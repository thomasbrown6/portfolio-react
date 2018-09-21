import React from "react";
import { Row, Col } from "../components";

export const ProjectSection = () => (
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
    <div class="my-auto">
      <Row>
        <Col size="12">
          <h2 class="mb-5">Projects</h2>
        </Col>
      </Row>
      <Row>
        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">Get It Together</h3>
              <img
                class="card-img-top"
                alt="Get It Together"
                src={require("../images/GetItTogether.png")}
              />
              <div className="inner-body">
                <p>
                  Millennials are facing difficulties with managing their money
                  in preparation for present goals like paying bills and staying
                  afloat and future big decisions like buying a home. Because of
                  the hurdles of juggling the many aspects of managing finances
                  we created “Get it Together”.
                </p>
                <ul>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  <li>JavaScript</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Mongoose ORM</li>
                  <li>Heroku</li>
                  <li>GitHub</li>
                </ul>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://stormy-everglades-57851.herokuapp.com/"
                >
                  Webpage
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://github.com/lhernandez5/Get_It_Together"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">
                Muscle Men Male Revue
              </h3>
              <img
                class="card-img-top"
                alt="Muscle Men Male Revue"
                src={require("../images/muscleMaleRevue.png")}
              />
              <div className="inner-body">
                <p>
                  I built this site for a client to promote their business.
                  Their goal was to create a site that would have an high
                  ranking on Google. Focused on SEO, managed to have his site ranking within
                  the top 5.
                </p>
                <ul>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Bootstrap</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  <li>JavaScript</li>
                  <li>Node</li>
                  <li>GoDaddy</li>
                </ul>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="musclemenmalerevue.com"
                >
                  Webpage
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">
                Ebony Black Men Strippers
              </h3>
              <img
                class="card-img-top"
                alt="Ebony Black Men Strippers"
                src={require("../images/EbonyBlackMenStrippers.png")}
              />
              <div className="inner-body">
                <p>
                  I built this site for a client to promote their business.
                  Their goal was to create a site that would have an high
                  ranking on Google. Focused on SEO, managed to have his site ranking within
                  the top 2.
                </p>
                <ul>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Bootstrap</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  <li>JavaScript</li>
                  <li>Node</li>
                  <li>GoDaddy</li>
                </ul>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="http://ebonymenblackmalestrippers.com/"
                >
                  Webpage
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">
                Expectations By Destination
              </h3>
              <img
                class="card-img-top"
                alt="expectation by destination"
                src={require("../images/expectationsByDestination.png")}
              />
              <div className="inner-body">
                <p>
                  Use your geolocation or enter a new location to search for top
                  rated restaurants and events within the desired area.
                </p>
                <ul>
                  <li>Bootstrap</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>API: Zomato, Ticketmaster</li>
                  <li>GitHub</li>
                </ul>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://ejohn156.github.io/ExpectationByDestination/"
                >
                  Webpage
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://github.com/ejohn156/ExpectationByDestination"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Col>

        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">Project Fitness</h3>
              <img
                class="card-img-top"
                alt="Project Fitness"
                src={require("../images/ProjectFitness.png")}
              />
              <div className="inner-body">
                <p>
                  Project Fitness give users availability to a variety of gym
                  workouts categorized by muscle group/type of work out. Ability
                  to create a workout, calculate body mass index for user and
                  store workout data in the database which shows up in their
                  profile.
                </p>
                <ul>
                  <li>Express-Handlebars</li>
                  <li>Bootstrap</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>MySQL</li>
                  <li>JAWSDB</li>
                  <li>Sequelize</li>
                  <li>Heroku</li>
                  <li>GitHub</li>
                </ul>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://rocky-harbor-15669.herokuapp.com/"
                >
                  Webpage
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://github.com/ejohn156/Project2"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">
                NBA Article Scraper App
              </h3>
              <img
                class="card-img-top"
                alt="NBA Article Scraper App"
                src={require("../images/ArticleScrapeApp.png")}
              />
              <div className="inner-body">
                <p>
                  News Scraper is web application that uses Cheerio and Mongoose
                  to retreive and store news articles from a NBA article
                  website. Articles are retreived from the database and passed
                  into Handlebars to be displayed in an attractive manner. The
                  app allows users to save articles, make comments on or delete
                  comments from the articles saved.
                </p>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://agile-tundra-77821.herokuapp.com/articles"
                >
                  Webpage
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://github.com/thomasbrown6/ArticleScraperApp"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Col>

        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">
                Clicky Game React App
              </h3>
              <img
                class="card-img-top"
                alt="Clicky Game App"
                src={require("../images/clickyGameApp.png")}
              />
              <div className="inner-body">
                <p>
                  This is a single page app built using React. The purpose of
                  the game is to click on each individual image until they've
                  each been clicked one. The game will end if an image is
                  clicked more than once. After each click the images with
                  shuffle order.
                </p>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://thomasbrown6.github.io/ClickyGameApp/"
                >
                  Webpage
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://github.com/thomasbrown6/ClickyGame"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">Train Scheduler</h3>
              <img
                class="card-img-top"
                alt="Train Scheduler"
                src={require("../images/trainScheduler.png")}
              />
              <div className="inner-body">
                <p>
                  A train schedule app where you can enter the train details and
                  the time of and the minutes until the next train will be
                  calculated and displayed. When adding trains, administrators
                  submit the following: Train name, Destination, First Train
                  Time, and Frequency (in minutes). This app provides up-to-date
                  information about various trains, namely their arrival times
                  and how many minutes remain until they arrive at their
                  station.
                </p>
                <p>
                  This app uses Firebase to store arrival and departure data. It
                  retrieves and manipulate the data with Moment.js.
                </p>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://thomasbrown6.github.io/TrainScheduler/"
                >
                  Webpage
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://github.com/thomasbrown6/TrainScheduler"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Col>

        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">
                Amazon Store Node App
              </h3>
              <img
                class="card-img-top"
                alt="Amazon Store App"
                src={require("../images/amazonStoreApp.png")}
              />
              <div className="inner-body">
                <p>
                  Node Application that has capabilities for a customer and a
                  manager to interact with. The customer only has the option to
                  view the inventory and purchase products that are available.
                  The manager has the option to view the inventory, view the
                  products with a low quantity, add to the quantity of products,
                  and add new products to the inventory.
                </p>
                <p>
                  Languages used for front-end programming are JavaScript and
                  jQuery. Languages used for back-end programming are Node.js,
                  and MySQL.
                </p>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://thomasbrown6.github.io/AmazonStore/"
                >
                  Webpage
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://github.com/thomasbrown6/AmazonStore"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">Giphy API</h3>
              <img
                class="card-img-top"
                alt="Giphy API App"
                src={require("../images/giphyImage.png")}
              />
              <div className="inner-body">
                <p>
                  This app uses the Giphy API to populate the web page with gifs
                  by clikcing on the buttons on the page. The user has the
                  option to click on a button or to add a button of their
                  choice. When a user clicks on the button, the page grabs 10
                  static, non-animated gif images from the Giphy API and place
                  them on the page. When the user clicks one of the still Giphy
                  images, the gif should animate. If the user clicks the gif
                  again, it should stop playing.
                </p>
                <p>
                  Under each gif, display its rating (PG, G, so on). This data
                  is provided by the Giphy API.
                </p>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://thomasbrown6.github.io/GiphyAPI/"
                >
                  Webpage
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://github.com/thomasbrown6/GiphyAPI"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Col>

        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">Friend Finder</h3>
              <img
                class="card-img-top"
                alt="Friend Finder"
                src={require("../images/friendFinder.png")}
              />
              <div className="inner-body">
                <p>
                  This is a full-stack site that takes in results from the
                  user's survey, then compare their answers with previous, other
                  users. The app will then display the name and picture of the
                  user with the best overall match.
                </p>
                <p>
                  The app saves the users answers as an array of objects.
                  Converts each user's results into a simple array of numbers.
                  After that it compares the difference between current user's
                  scores with those from other users, question by question. Add
                  up the differences to calculate the total difference. The
                  closest match is the user with the least amount of difference.
                </p>
                <p>Used Express to handle routing. Deployed to Heroku.</p>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://mysterious-forest-98702.herokuapp.com/"
                >
                  Webpage
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://github.com/thomasbrown6/FriendFinder"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">Unit 4 Game</h3>
              <img
                class="card-img-top"
                alt="Unit 4 Game"
                src={require("../images/unit4Game.png")}
              />
              <div className="inner-body">
                <p>
                  The player will have to guess the answer with numbers. There
                  are four crystals displayed as buttons on the page. The app
                  chooses a random number at the start of the game. When the
                  player clicks on a crystal, it will add a specific amount of
                  points to the player's score. To win, the player's total score
                  must match the random number. The player loses if the score
                  goes above the random number.
                </p>
                <p>This app dynamically updates the HTML page using jQuery.</p>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://thomasbrown6.github.io/unit-4-game/"
                >
                  Webpage
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://github.com/thomasbrown6/unit-4-game"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Col>

        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">Eat-Da-Burger App</h3>
              <img
                class="card-img-top"
                alt="Eat-Da-Burger App"
                src={require("../images/burger.png")}
              />
              <div className="inner-body">
                <p>
                  This is a application that allows for a user to create a list
                  of burgers they'd like to eat. They have the option to either
                  eat, remove, and add to the list of burgers. Whenever a user
                  submits a burger's name, the app displays it on the left side
                  of the page. Each burger on the left will have a button that
                  will allow the user to eat or delete it. All eaten burgers are
                  displayed on the right side of the page. App stores every
                  burger in database, eaten or not.
                </p>
                <p>
                  Languages used for front-end programming are HTML5,
                  Express-Handlebars, CSS3, Bootstrap, JavaScript, and jQuery.
                  Languages used for back-end programming are Node.js, MySQL,
                  JAWSDB, and Express.js. Used a homemade ORM to create and
                  retrieve data from the database. Used MVC pattern for the user
                  interface. Deployed to Heroku and GitHub Pages.
                </p>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://blooming-spire-44184.herokuapp.com/"
                >
                  Webpage
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://github.com/thomasbrown6/Burger"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">NBA Trivia</h3>
              <img
                class="card-img-top"
                alt="NBA Trivia"
                src={require("../images/triviaGame.png")}
              />
              <div className="inner-body">
                <p>
                  Trivia game that only shows one question until the player
                  answers it or their time runs out. If the player selects the
                  correct answer, the app shows a screen congratulating them and
                  after a few seconds, displays the next question. If the player
                  runs out of time, app tells the player "time's up" and then
                  displays the correct answer. Also, if player gets the question
                  wrong, the app tells the player "wrong answer" and displays
                  the correct one.
                </p>
                <p>
                  This app uses JavaScript for the logic and jQuery to
                  manipulate HTML.
                </p>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://thomasbrown6.github.io/TriviaGame/"
                >
                  Webpage
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://github.com/thomasbrown6/TriviaGame"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Col>

        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">Psychic Game</h3>
              <img
                class="card-img-top"
                alt="Psychic Game"
                src={require("../images/psychicGame.png")}
              />
              <div className="inner-body">
                <p>
                  This is a app that randomly picks a letter, and the user has
                  to guess which letter the app chose. The app keeps up with the
                  number of wins, losses, guesses left, and the guesses so far.
                  Simply uses JavaScript, HTML5 and CSS3.
                </p>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://thomasbrown6.github.io/psychicGame/"
                >
                  Webpage
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://github.com/thomasbrown6/psychicGame"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">LIRI Node App</h3>
              <img
                class="card-img-top"
                alt="Liri Node App"
                src={require("../images/liriNodeApp.png")}
              />
              <div className="inner-body">
                <p>
                  This application is LIRI, LIRI is like iPhone's SIRI. However,
                  while SIRI is a Speech Interpretation and Recognition
                  Interface, LIRI is a _Language_ Interpretation and Recognition
                  Interface. This app is a command line node app that takes in
                  parameters and gives you back data.
                </p>
                <p>
                  Node liri.js my-tweets => This will show your last 20 tweets
                  and when they were created at in your terminal/bash window.
                </p>
                <p>
                  Node liri.js spotify-this-song 'song name here' => This will
                  show the following information about the song in your
                  terminal/bash window: Artist(s), The song's name, A preview
                  link of the song from Spotify, The album that the song is from
                </p>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://thomasbrown6.github.io/LiriNodeApp/"
                >
                  Webpage
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://github.com/thomasbrown6/LiriNodeApp"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Col>

        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">NBA Hangman</h3>
              <img
                class="card-img-top"
                alt="Word Guess"
                src={require("../images/wordGuessGameImage.png")}
              />
              <div className="inner-body">
                <p>
                  This is a nba themed hangman game, the app randomly guesses a
                  nba player's name from an array of names. The name is then
                  displayed as dashes. The user has to guess the name by
                  clicking on the giving letters of buttons. When a user guess
                  is in the word, the dash is removed for that specific letter
                  and is replaced with the correct letter.
                </p>
                <p>
                  This app dynamically updates the HTML and is powered by
                  JavaScript.
                </p>
              </div>
              <div class="resume-link text-md-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://thomasbrown6.github.io/WordGuessGame/"
                >
                  Webpage
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                  href="https://github.com/thomasbrown6/WordGuessGame"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col size="6" />
      </Row>
    </div>
  </section>
);
