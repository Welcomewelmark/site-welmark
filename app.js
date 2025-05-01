<<<<<<< HEAD
const express = require("express");
const app = express();
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");
const bodyParser = require("body-parser");
const membres = require("./public/forms/membres.json");
const getDateYMD = require("./joursTransaction");
const dateDuJour = getDateYMD();
//const membres = require("./public/forms/membres.json")
const multer = require("multer");
app.engine("html", ejs.__express);
app.set("view engine","html");
app.set("views",path.join(__dirname,"./public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/acceuil",(req,res)=>{
    res.status(200).render("index")
    console.log("ejs");
    
});

app.get("/admin",(req,res)=>{
    //lire le fichier json
    fs.readFile("./public/forms/membres.json","utf-8",(err,data)=>{
        if(err){
            console.error("erreur lors de la lecture du fichier json",err);
            res.status(500).send("erreur serveur");
            return;
        }
        // convertir JSON en objet
        const jsonData = JSON.parse(data);
       res.render("adma2.html",{membres})
    });
})
//recupère les informations saisi dans le champ de connection et les traitent
app.post("/connection_au_compte",(req,res)=>{
    let connection = {
        tel_email : req.body.telephone_email,
        mots_de_passe : req.body.mots_de_passe
    };
    res.send(connection); 
    console.log(connection);
    
});
//recupère les informations des inscriptions et gère les information
app.post("/Insciption.ejs",(req,res)=>{
    let nouveau_client = {
        nom : req.body.noms,
        prenom : req.body.prenoms,
        naissance : req.body.naissance,
        adresse : req.body.adresse,
        arrondissement : req.body.arrondissement,
        numero_personel : req.body.numero_personel,
        numero_tuteur : req.body.numero_tuteur,
        adresse_email : req.body.adresse_email,
        classe : req.body.classe,
        statutClasse : req.body.statut,
        message : req.body.message,
        consommation: "En cours",
        dateInscription: dateDuJour,
        montantAPayer: "6000 FCFA",
        site: "Madibou",
        statut: "Non redevable",
        image: "ngoma.jpg",
        motDePasse: "1234",
    };
    fs.readFile("./public/forms/membres.json","utf-8",(err,data)=>{
        if(err) return console.log("il y'a une erreur sur la lecture du fichier des membres json");
        const jsonData = JSON.parse(data);// recuper le format json en js
        jsonData.push(nouveau_client);
        fs.writeFile("./public/forms/membres.json",JSON.stringify(jsonData,null,2), (err)=>{
            if(err) return console.log("ecriture d'écriture");
            console.log("élève ajouter va vérifier");
            res.render("felicitationInscription",{nouveau_client})
        })
       
    })
});
//recupère les informations du champs pour vérifier les résultats des examens
app.post("/resultats.ejs",(req,res)=>{
    let resultats = {
        nom : req.body.nom,
        prenom : req.body.prenom,
        matricule : req.body.matricule,
        examen : req.body.examen,
        annee : req.body.annee
    }
    res.status(200).send(resultats); 
});
app.post("/connect_Auto",(req,res)=>{
    let infoIdentifiant = {
        Identifiant : req.body.Identifiant,
        mots_de_passe : req.body.mots_de_passe
    };
    let telephone = req.body.Identifiant;
    let motDePasse = req.body.mots_de_passe;
   let trouve = false;
   for(let i = 0 ; i<membres.length;i++){
    const eleve = membres[i];
    const mots_de_passe = eleve.motDePasse;
    const numero = eleve.numero_personel;
    if(mots_de_passe === motDePasse && numero === telephone){
        res.render("espaceEleve",{eleve});
        console.log(`${eleve.prenom} ${eleve.nom}`);
        trouve = true; //condition trouvé
        break; //arrêter la boucle dès que la condition est remplie 
    }
   }
   if(!trouve){
    res.send("le compte n'existe pas")
   }
});

app.listen(8080,()=>{
    console.log("serveur prêt au port 8080");
    
});
=======
const express = require("express");
const app = express();
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");
const bodyParser = require("body-parser");
const membres = require("./public/forms/membres.json");
const getDateYMD = require("./joursTransaction");
const dateDuJour = getDateYMD();
//const membres = require("./public/forms/membres.json")
const multer = require("multer");
app.engine("html", ejs.__express);
app.set("view engine","html");
app.set("views",path.join(__dirname,"./public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/acceuil",(req,res)=>{
    res.status(200).render("index")
    console.log("ejs");
    
});

app.get("/admin",(req,res)=>{
    //lire le fichier json
    fs.readFile("./public/forms/membres.json","utf-8",(err,data)=>{
        if(err){
            console.error("erreur lors de la lecture du fichier json",err);
            res.status(500).send("erreur serveur");
            return;
        }
        // convertir JSON en objet
        const jsonData = JSON.parse(data);
       res.render("adma2.html",{membres})
    });
})
//recupère les informations saisi dans le champ de connection et les traitent
app.post("/connection_au_compte",(req,res)=>{
    let connection = {
        tel_email : req.body.telephone_email,
        mots_de_passe : req.body.mots_de_passe
    };
    res.send(connection); 
    console.log(connection);
    
});
//recupère les informations des inscriptions et gère les information
app.post("/Insciption.ejs",(req,res)=>{
    let nouveau_client = {
        nom : req.body.noms,
        prenom : req.body.prenoms,
        naissance : req.body.naissance,
        adresse : req.body.adresse,
        arrondissement : req.body.arrondissement,
        numero_personel : req.body.numero_personel,
        numero_tuteur : req.body.numero_tuteur,
        adresse_email : req.body.adresse_email,
        classe : req.body.classe,
        statutClasse : req.body.statut,
        message : req.body.message,
        consommation: "En cours",
        dateInscription: dateDuJour,
        montantAPayer: "6000 FCFA",
        site: "Madibou",
        statut: "Non redevable",
        image: "ngoma.jpg",
        motDePasse: "1234",
    };
    fs.readFile("./public/forms/membres.json","utf-8",(err,data)=>{
        if(err) return console.log("il y'a une erreur sur la lecture du fichier des membres json");
        const jsonData = JSON.parse(data);// recuper le format json en js
        jsonData.push(nouveau_client);
        fs.writeFile("./public/forms/membres.json",JSON.stringify(jsonData,null,2), (err)=>{
            if(err) return console.log("ecriture d'écriture");
            console.log("élève ajouter va vérifier");
            res.render("felicitationInscription",{nouveau_client})
        })
       
    })
});
//recupère les informations du champs pour vérifier les résultats des examens
app.post("/resultats.ejs",(req,res)=>{
    let resultats = {
        nom : req.body.nom,
        prenom : req.body.prenom,
        matricule : req.body.matricule,
        examen : req.body.examen,
        annee : req.body.annee
    }
    res.status(200).send(resultats); 
});
app.post("/connect_Auto",(req,res)=>{
    let infoIdentifiant = {
        Identifiant : req.body.Identifiant,
        mots_de_passe : req.body.mots_de_passe
    };
    let telephone = req.body.Identifiant;
    let motDePasse = req.body.mots_de_passe;
   let trouve = false;
   for(let i = 0 ; i<membres.length;i++){
    const eleve = membres[i];
    const mots_de_passe = eleve.motDePasse;
    const numero = eleve.numero_personel;
    if(mots_de_passe === motDePasse && numero === telephone){
        res.render("espaceEleve",{eleve});
        console.log(`${eleve.prenom} ${eleve.nom}`);
        trouve = true; //condition trouvé
        break; //arrêter la boucle dès que la condition est remplie 
    }
   }
   if(!trouve){
    res.send("le compte n'existe pas")
   }
});

app.listen(8080,()=>{
    console.log("serveur prêt au port 8080");
    
});
>>>>>>> 874f1f1 (Premier commit du projet)
