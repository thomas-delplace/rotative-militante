const Ratios = {
    "liste" : {
        "ratio" : ["1:1", "3:4", "4:5", "iso", "2:3", "9:16"],
        "orientation" : ["paysage", "portrait"]
    },
    "1:1" : {
        "__nom__":"carre",
        "paysage":{
            "__nom__" : "paysage",
            "petit" : 1,
            "grand" : 1
        },
        "portrait":{
            "__nom__" : "portrait",
            "petit" : 1,
            "grand" : 1
        }
    },
    "4:5" : {
        "__nom__" : "4:5",
        "paysage" : {
            "__nom__" : "paysage",
            "petit" : 5/4,
            "grand" : 4/5
        },
        "portrait" :{
            "__nom__" : "portrait",
            "petit" : 4/5,
            "grand" : 5/4
        }
    },
    "3:4" : {
        "__nom__" : "3:4",
        "paysage" : {
            "__nom__" : "paysage",
            "petit" : 3/4,
            "grand" : 4/3
        },
        "portrait" :{
            "__nom__" : "portrait",
            "petit" : 4/3,
            "grand" : 3/4
        }
    },
    "iso" : {
        "__nom__" : "iso",
        "paysage" : {
            "__nom__" : "paysage",
            "petit" : 297/210,
            "grand" : 210/297
        },
        "portrait" :{
            "__nom__" : "portrait",
            "petit" : 210/297,
            "grand" : 297/210
        }
    },
    "2:3" : {
        "__nom__" : "2:3",
        "paysage" : {
            "__nom__" : "paysage",
            "petit" : 2/3,
            "grand" : 3/2
        },
        "portrait" :{
            "__nom__" : "portrait",
            "petit" : 3/2,
            "grand" : 2/3
        }
    },
    "9:16" : {
        "__nom__" : "9:16",
        "paysage" : {
            "__nom__" : "paysage",
            "petit" : 9/16,
            "grand" : 16/9
        },
        "portrait" :{
            "__nom__" : "portrait",
            "petit" : 16/9,
            "grand" : 9/16
        }
    }
}

module.exports = Ratios