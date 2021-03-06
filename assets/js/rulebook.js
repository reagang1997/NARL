

$(document).ready(function () {
    var ruleBook = $("#rulebook").click(function () {
        var $jumbo = $("#jumbo").empty();
        var $heading = $(/*html*/`
            <h1 class="display-4">NARL Rulebook</h1>
            <br>
            <h3>Defending</h3>
            <h4>D.1:</h4>
            <p>Any driver defending their position on a straight may use the full width of the track before the breaking area during their first move. For the avoidance of doubt, if any part of the front wing of the car attempting to pass is alongside the rear wheel of the car in front this will be deemed to be a 'significant portion'. Whilst defending in this way the driver may not leave the track without justifiable reason.</p>
            <h4>D.2:</h4>
            <p>More than one change of direction to defend a position is not permitted.</p>
            <h4>D.3:</h4>
            <p>Maneuvers liable to hinder other drivers, such as deliberate crowding of a car beyond the edge of the track or any other abnormal change of direction, are not permitted.</p>
            <h4>D.4:</h4>
            <p> Any driver moving back towards the racing line, having earlier defended his position off-line, should leave at least one car width between his own car and the edge of the track on the approach to the corner.</p>
            <h4>D.5</h4>
            <p> If you are new to racing Formula 1, check out this article that goes more in-depth on how to properly defend and how not to defend. </p>
            <a href="https://f1metrics.wordpress.com/2014/08/28/the-rules-of-racing/">The Rules of Racing</a>
            <br>
            <br>
            <h3>Rejoining</h3>
            <h4>R.1:</h4>
            <p>Any driver who has left the track must rejoin it in a safe manner, matching the direction of the racing line. Drivers should rejoin away from the racing line. If this is not possible, driver should let incoming drivers on the racing line pass. Any driver causing a collision by rejoining the track into traffic will be investigated and likely penalised. </p>
            <br>
            <h3>Qualification</h3>
            <h4>Q.1:</h4>
            <p>Any driver on an outlap must let drivers attempting timed laps pass. Any offense of this can be protested and is punishable, so don't put yourself in that situation.</p>
            <h4>Q.2:</h4>
            <p>If a driver on a timed lap is catching up to on another driver on a timed lap, there is no priority. It is up to the driver behind to leave enough space before the beginning of a lap to avoid losing time by battling.</p>
            <h3>Pit Exit</h3>
            <h4>PE.1:</h4>
            <p>A driver leaving the pits is not allowed to cross the solid white line. This will be punishable with +3 seconds added to their total race time.</p>
            <h3>Drag Reduction System (DRS):</h3>
            <h4>DRS.1:</h4>
            <p>A driver will have access to the DRS system if they are within 1 second of the car ahead of them by the time the driver reaches the DRS detection zone.</p>
            <h4>DRS.2:</h4>
            <p>Since there is no way to stop drivers from using DRS, we will use ACRL DRS as an enforcement tool.</p>
            <h4>DRS.3:</h4>
            <p>A driver is granted ONE accidental activation of DRS. Otherwise, the driver will receive 3 seconds added to their total race time.</p>
            <h3>Yellow Flags</h3>
            <p>Yellow flags are to be ignored as they are sector wide and not enforced by the game. Overtaking is permitted. Just watch yourself and other cars if you are in proximity of an incident!</p>
            <h3>Blue Flags</h3>
            <h4>BF.1:</h4>
            <p>If a driver is shown a blue flag during a race, they are to get off the racing line as soon as possible to let the faster car overtake. If a driver does not move of the racing line, the faster driver has the right to protest. If the protest stands, the slower driver will receive 3 seconds added to their total race time.</p>
            <h3>Pit Stops / Tires:</h3>
            <h4>PS.1:</h4>
            <p>You are going to be required to enter the pits AT LEAST one time. If you do not do so, you will be DSQ'd at the end of the race.</p>
            <h4>T.1</h4>
            <p>For the top 10 drivers in qualifying, you are required to start the race on the compound you set your fastest lap.</p>
            <h4>T.2</h4>
            <p>You are required to change tire compound once per race.</p>
            <h3>Protests:</h3>
            <h4>P.1</h4>
            <p>If you are victim of an incident which you think may infringe on any of the rules above, please raise a ticket in #protest text channel and provide a short clip of the infraction along with which rule was broken. This will open a private ticket which only a committee of 3 stewards will be able to see. Stewards will mostly stay the same unless one of them is involved in the incident, in which case a different steward will be selected for this specific incident as a replacement.</p>
            <h4>P.2</h4>
            <p>All time penalties will be dependent on the severity of the infraction.</p>
            <br>
            <br>
            <h4>If you join a practice/race server, you are agreeing to all rules stated above. You will be held accountable for your actions out on track. 
            <br>
            <br>
            Please drive safely! 
            <br>
            See y'all out on track!</h4>

            
            `);
        $jumbo.append($heading);
    });
})