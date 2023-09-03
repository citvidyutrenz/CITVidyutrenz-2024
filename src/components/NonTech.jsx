import React from 'react'

const NonTech = () => {
    const events = [
        {
          name: "BGMI",
          description: "The matches will be held in 2 modes.",
          rounds: [
            "Round 1: 1st match will be a classic match... Either Karakin or Livik... The top 3 winning squads will be qualified for the next round.",
            "Round 2: Will be held in TDM mode."
          ],
          judgingCriteria: "Team1 (1st place) will be qualified to finals and the semi-finals between Team2 (2nd place) & team3 (3rd place) will play match 2... The winner of the semi-finals will be qualified for the finals. Team1 (1st position) and team (semi final winner) will play match 3 in TDM mode.. The winner of match 3rd will be declared as the winner."
        },
        {
          name: "MOVIEMANIACS",
          description: "On the screen, a frame from a movie will be displayed without disclosing the character or movie's title. Participants should identify the name of the movie from the given options.",
          rules: [
            "The game will consist of three rounds.",
            "Participants should have their mobile phones with proper internet connectivity to participate.",
            "The first and second rounds will be conducted in Kahoot, an online quiz platform.",
            "The final round will be a buzzer round conducted manually.",
            "The participant who identifies the maximum number of movies correctly in the final round will be declared the winner."
          ],
          rounds: [
            {
              name: "First Round: Kahoot Quiz",
              description: "A set of freeze frames from different movies will be displayed on the screen. The participants will be given multiple choice questions with options to identify the movie from the displayed frame. The participants will have to choose the correct answer within the given time limit. The top performers will qualify for the next round."
            },
            {
              name: "Second Round: Kahoot Quiz",
              description: "A set of more challenging freeze frames from different movies will be displayed on the screen. The participants will be given multiple choice questions with options to identify the movie from the displayed frame. The participants will have to choose the correct answer within the given time limit. The top performers will qualify for the final round."
            },
            {
              name: "Final Round: Buzzer Round",
              description: "A freeze frame from a movie will be displayed on the screen. The participants who qualified for the final round will be given a buzzer each. The first participant to identify the movie by buzzing in will be asked to give the answer. If the answer is correct, the participant will be awarded a point. If the answer is incorrect, the participant will lose a point. The participant with the maximum number of points at the end of the round will be declared the winner."
            }
          ],
          judgingCriteria: [
            "Accuracy of answers: The primary criterion for judging the participants would be the accuracy of their answers. The participants who can correctly identify the movie name in the given frame would receive points.",
            "Speed: In the buzzer round, the speed of the participants in pressing the buzzer would also be considered for judging. The first person to press the buzzer and answer correctly would receive more points.",
            "Elimination: In the initial rounds, participants who give incorrect answers or take too much time to answer may be eliminated from the game.",
            "Consistency: Consistency in performance throughout the game would also be considered while judging. Participants who perform well in all the rounds would have a higher chance of winning.",
            "Fair play: Participants must abide by the rules and regulations of the game. Any cheating or misconduct would lead to disqualification.",
            "Sportsmanship: Participants should display good sportsmanship, such as congratulating the winners and accepting defeat gracefully. Participants who show unsportsmanlike behavior would be disqualified."
          ]
        }
      ];
    
  return (
    <>
      <div>
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          {event.rules && event.rules.length > 0 && (
            <div>
              <h3>Rules:</h3>
              <ul>
                {event.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex}>{rule}</li>
                ))}
              </ul>
            </div>
          )}
          {event.rounds && event.rounds.length > 0 && (
            <div>
              <h3>Round Details:</h3>
              <ul>
                {event.rounds.map((round, roundIndex) => (
                  <li key={roundIndex}>{round.name}: {round.description}</li>
                ))}
              </ul>
            </div>
          )}
          {Array.isArray(event.judgingCriteria) && event.judgingCriteria.length > 0 && (
            <div>
              <h3>Judging Criteria:</h3>
              <ul>
                {event.judgingCriteria.map((criteria, criteriaIndex) => (
                  <li key={criteriaIndex}>{criteria}</li>
                ))}
              </ul>
            </div>
          )}
          {typeof event.judgingCriteria === 'string' && (
            <div>
              <h3>Judging Criteria:</h3>
              <p>{event.judgingCriteria}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  )
}

export default NonTech