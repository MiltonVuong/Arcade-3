function madLibs() {
    alert("Welcome to the Mad Libs Game!");
    let storyCount = 0;
    const askQuestion = (question) => {
        return prompt(question);
    };
    const playGame = () => {
        let play = askQuestion("Would you like to scribble a Mad Lib (y/n)?");
        while (play.toLowerCase() === 'y') {
            let name = askQuestion("First, what is your name?");
            let choice;
            while (true) {
                choice = askQuestion(`Hello, ${name}! Which story line would you like to explore?\n` +
                    "a. Birth of a Hero\n" +
                    "b. Master of the Arena\n" +
                    "c. Tale of the Minstrel\n" +
                    "What is your choice (a/b/c)?");
                if (['a', 'b', 'c'].includes(choice.toLowerCase())) break;
                alert("Invalid choice. Please choose a, b, or c.");
            }
            let story = "";
            if (choice.toLowerCase() === 'a') {
                let words1 = askQuestion("1. What is the name of your favorite city? ");
                let words2 = askQuestion("2. What is your favorite car model? ");
                let words3 = askQuestion("3. What is a technology that fascinates you? ");
                let words4 = askQuestion("4. What is a group of animals you find cute? ");
                let words5 = askQuestion("5. What is your villain name? ");
                let words6 = askQuestion("6. What is the biggest problem in the world? ");
                let words7 = askQuestion("7. What is worth a lot to you? ");
                story = `In the city of ${words1}, a hero emerged driving a ${words2}. With the power of ${words3}, they fought against the ${words4} led by the villain ${words5}. The biggest problem, ${words6}, was solved, and ${words7} was restored.`;
            } else if (choice.toLowerCase() === 'b') {
                let words1 = askQuestion("1. Name an occupation. ");
                let words2 = askQuestion("2. Name a family member. ");
                let words3 = askQuestion("3. Name a prestigious title. ");
                let words4 = askQuestion("4. Name a personality trait. ");
                let words5 = askQuestion("5. Name an ancient city. ");
                let words6 = askQuestion("6. Name a funny name. ");
                let words7 = askQuestion("7. Name a fancy name. ");
                story = `The ${words1} known as ${words2} earned the title of ${words3}. With their ${words4} nature, they conquered the ancient city of ${words5}. Known as ${words6}, they were celebrated by all as ${words7}.`;
            } else {
                let words1 = askQuestion("1. Pick a plural noun. ");
                let words2 = askQuestion("2. Pick an adjective. ");
                let words3 = askQuestion("3. Pick a plural noun. ");
                let words4 = askQuestion("4. Pick an adjective. ");
                let words5 = askQuestion("5. Pick a plural noun. ");
                let words6 = askQuestion("6. Pick an adjective. ");
                let words7 = askQuestion("7. Pick a plural noun. ");
                story = `The ${words1} were ${words2} and the ${words3} were ${words4}. Together, the ${words5} and the ${words6} ${words7} created a wonderful tale.`;
            }
            alert(story);
            storyCount++;
            alert(`You have created ${storyCount} story.`);
            play = askQuestion("Would you like to explore another option (y/n)? ");
        }
        alert("Thank you for playing!");
    };
    playGame();
}

