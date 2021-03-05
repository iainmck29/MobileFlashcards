Welcome to my mobile flashcards app, the final project of the Udacity React Nanodegree programme. This README is broken into 3 sections.

Section 1 is the planning of the app and the order of the build for the project.
Section 2 is the user guide which explains how to use the app including installation etc.
Section 3 is my personal comments section which highlights pain points and notes for other Udacity students going forward.

Enjoy!

Section 1 - Planning

List of immediate tasks:
1. Plan each view and also each component that will be required in the app.
    - This will be done using Figma. The structure of the views is given below:

    -App
        - Home (shows list of available decks)
            - DeckMain (user is shown a screen with buttons asking them if they want to 'answer deck', 'add questions' or 'delete deck')
                - Answer (user is able to answer questions relative to the deck they are on. On answer, screen changes or alerts if user is right or wrong then setTimeout takes them to next screen automatically)
                    - EndQuiz (user is shown view to let them know they have reached the end of the deck. They are shown their respective score and 2 buttons for 'restart deck' and 'back to deck')
                - AddQuestion (user is shown an input field which they are able to type in a question and answer a button for them to submit to the deck they are currently on. Asked if they want to ask another or go back to home)
                - alert (if Delete deck is chosen user is prompted on whether they definitely want to delete the current deck)
            - NewDeck (user selects tab and is shown screen which gives an input for them to name a new deck. submit button adds deck to deck data and returns user to home)


2. Plan out components for each view
    Components:
        Home
            - DeckPreview
                - a box containing text saying the name of the deck, how many questions are in the deck and a button inviting the user to view the deck (go to DeckMain)
                -2x Btn

        DeckMain
            - 2x Btns. One leading user to AnswerView screen and the other leading to AddQuestionView screen.

        AnswerView
            -2x Btns. Correct/Incorrect which will check users answer against correct answer and alert whether user is correct or not. Total is stored in storage
            -Clickable text allowing user to return to DeckMain.

        ScoreView
            -Text will display users score on page out of how many questions were in deck and give total as percentage below.
            -2x Btns which give user option to either restart deck which will take them back to the first question again or return to the DeckMain screen.

        AddDeckView
            -Input text field for user to add a deck name
            -Btn to submit deck name to database. User is redirected to home after submitting and will be able to view new deck at bottom of pile

        AddQuestionView
            -2 input text fields prompting user for question and answer
            -Submit button which will submit responses to database


        General components
            - Btn


3. App data
    What data is required for each view?

    Home 
        - will need access to the decks available then also the amount of questions in each deck

    DeckMain
        - Will need to output the name of the current deck. Could be passed an id based on the deck clicked in home. This id will also be passed to the Answer component to begin iterating over the questions in the deck.

    Answer
        - Will need to know which question the user is currently on, the answer to that question and be able to submit the users answer to the database. The Answer should then render the next question.
        - Hardest part will be to track which question the user is currently on and then move to the next question only once the user has submitted their answer. Something like:
            Object.keys
            if !end of array return Answer else return ScoreView
    
    ScoreView
        - Will need the state of the users score. State of users score to be managed locally? AsyncStorage? Redux? This will need to be worked out.
        - Will need the id of the deck the user has played to return to DeckMain on correct deck.

    AddDeckView
        -Will need access to database storing all decks and be able to dispatch a request to append a new deck to database. May be useful here to set up the correct structure of the new deck as given in Udacity rubric.

    AddQuestionView
        -Will need the id of the deck for which the user wishes to answer questions. The user will submit their question and answer to the deck and be alerted to their success or error if necessary. The data is added to the deck.

Main data issue:
    Answering questions
        - Order of events in app:
            - User clicks on answer from deck main.
            - The first question in the questions array is passed to AnswerView. The user is able to see the question and answer whether they have got it correct or incorrect.
            - The correct/incorrect answer is stored in redux under the 'correct' part of the database. Redux to be used as single source of truth
            - We check whether the user has reached the end of the array of questions. If they have not, the next question data is passed to Answer and this is rendered on screen. If they have, ScoreView is rendered with the amount of answers correct out of total amount of answers.
            - Once user leaves the ScoreView page, or if they leave during the quiz, then questionsCorrect and questionsIncorrect in answers needs to be set to 0 again. This could be done via componentDidUnmount in ScoreView and as part of button submission in 'go to home' button.

Data structure example:
    decks: {
    React: {
        title: 'React',
        questions: [
        {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
        },
        {
            <!-- question: 'Whe÷÷re do you make Ajax requests in React?', -->
            answer: 'The componentDidMount lifecycle event'
        }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
        {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
        ]
    }
    },
    answers: {
        questionsCorrect: 0,
        questionsIncorrect: 3,
    }

4. Coding stage
    Order of tasks:
        - Build required views without data or functionality. Hard code in any necessary information at this stage.
        - Build in Navigation to connect views
        - Add in redux and work out how to use asyncstorage. This may take a while to do correctly.
        - Add in notifications
        - Tidy up app, make sure everything is working and submit!



Build stage Notes:
    Navigation complete using stack navigator and tab navigator.
    Header removed in stack navigator for the answer and score views to prevent user going back to previously answered questions

    Next jobs:
    Begin to add in some functionality. Create a redux store which will handle much of the data. This can be done in stages going backwards or forwards
        UI -> handlers -> actions -> reducers -> api(async storage?)
    
    For sake of consistency I will add this in for each individual part in the above order.

    Order of tasks:
     - Ability to add decks to storage
     - Render decks to home page
     - Correct information displayed for decks on DeckPreview and in DeckMain
     ...

    To do first:
    Set up redux and middleware for async function (redux thunk)
    Import any necessary packages

    Add decks to storage:
    - When user types in the deck name this will change value of local state
    - User will press submit button which will then trigger the handler (handleSubmit)
    - Action will be dispatched to store

    ** NEED TO SETITEM FOR ASYNC STORAGE, OTHER STUFF DONE **

    Render decks on homepage:
    - Receive decks part of state from store and pass as props to Home component
    - Iterate over decks part of store passed in from props (object.keys(decks))
        - Will receive the ID of each deck which can be passed to DeckPreview
    - Render DeckPreview for each deck passing in the deck as a prop

