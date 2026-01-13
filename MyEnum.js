//An enum is used to create multiple restrictable 
var Seatchoice;
(function (Seatchoice) {
    Seatchoice[Seatchoice["Aisle"] = 1] = "Aisle";
    Seatchoice["Middle"] = "Aisle";
    Seatchoice[Seatchoice["Window"] = 20] = "Window";
    Seatchoice[Seatchoice["Fourth"] = 21] = "Fourth";
})(Seatchoice || (Seatchoice = {}));
var FiniteSeats = Seatchoice.Aisle;
