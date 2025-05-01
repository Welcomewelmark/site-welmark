<<<<<<< HEAD
//fichier pour importer les dates de transactions sur mon site
function getDateYMD_Brazzaville() {
    const formater = new Intl.DateTimeFormat("fr-CA",{
        timeZone : "Africa/Brazzaville",
        year : "numeric",
        month : "2-digit",
        day : "2-digit"
    });
    const isoDate = formater.format(new Date());
    const [year,month,day]= isoDate.split("-")
    return  `${day}-${month}-${year}`;
}
=======
//fichier pour importer les dates de transactions sur mon site
function getDateYMD_Brazzaville() {
    const formater = new Intl.DateTimeFormat("fr-CA",{
        timeZone : "Africa/Brazzaville",
        year : "numeric",
        month : "2-digit",
        day : "2-digit"
    });
    const isoDate = formater.format(new Date());
    const [year,month,day]= isoDate.split("-")
    return  `${day}-${month}-${year}`;
}
>>>>>>> 874f1f1 (Premier commit du projet)
module.exports= getDateYMD_Brazzaville;