# LOVA (Logic Validation) WebPage Front-end

Hanyang Univ. 2019 Capstone Team LOVA.

This web page provides services for logical validation that allows to examine the logic of an essay or article.

## Functions

1. Logical Validation
   This is Essay scoring. The logicality score of the essay is expressed in percent. The higher score, the level of logic is higher. And depending on the score, users can be guided on areas that need modification in essay.

2. Truth Judgement

   We extract quoted sentence in essay and judge whether the sentence is true. If necessary, users can also choose the sentences they want to perform the reliability check. And by clicking on such a classified sentence, users can see a URL list where they can see the references associated with it.

3. Input Type

   Users can vary the type of input depending on the type of essay they want to be tested for logic.

   - FullText type : the entire essay
   - Thematic type : the essay by dividing claims and premises
   - Video type : a YouTube link that wants a logic validation check
     (In this type, text is extracted from the video and perform the checking.)

## Language/Libraries

- React.js
- Redux
- reactstrap
- material ui
- react-circular-progressbar
- react-content-loader
- sentence-splitter
- react-youtube

## Usage

Clone this repository files and open the project.

In the project directory, you can run:

### `npm install > npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## About LOVA

![MainPage](/Users/seogeurim/Desktop/lova-front/LOVA_IntroduceImages/MainPage.png)

This is the main page.

![InputType](/Users/seogeurim/Desktop/lova-front/LOVA_IntroduceImages/InputType.png)

Users can choose the Input Type by the essay type they want to test logicality.

![LogicValidation](/Users/seogeurim/Desktop/lova-front/LOVA_IntroduceImages/LogicValidation.png)

This is the result page of logic validation after enter the essay.
The number at the top represents the essay score. The sentences below are automatically classified quoted sentences.

![TruthJudgement](/Users/seogeurim/Desktop/lova-front/LOVA_IntroduceImages/TruthJudgement.png)

If click on the quoted sentence, users can see the urls associated with it.
And if you have a sentence that you want to check out further, you can click on the sentence in the full text on the left to see it.