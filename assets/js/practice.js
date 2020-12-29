const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
    origin: "null"
}))

 $(document).ready(function(e) {
    $.getJSON( "assets/data/results.json" , function( result ){
        alert(result.start.count);
    });
})