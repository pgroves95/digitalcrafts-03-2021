digitalCraftsStudent = {
    "name": "Patrick Groves",
    "city": "Boulder, CO",
    "computer": ["System76 Galago Pro"],

}
# print preferred gametime
gamer = {
    "platform": "PC",
    "gamingHours": [{"weekday": "9-5"}, {"weekends": "anytime"}],
    "skill": "n00b"
}

car = {
    "model": "Subaru Impreza",
    "image": "shorturl.at/eiCKU",
    "year": "2018",
    "engineChoices": [

        {
            "v4": {
                "horsepower": 230
            }
        },
        {
            "v6": {
                "horsepower": 300
            }
        },
        {
            "v8": {
                "horsepower": 400
            }
        },
        {
            "v12": {
                "horsepower": 900
            }
        }
    ],

}

print(digitalCraftsStudent["computer"][0])
print(gamer["gamingHours"][0]["weekday"])
engine_list = []
for d in car["engineChoices"]:
    engine_list += d.keys()
print(engine_list)
hp_list = []
for d in car["engineChoices"]:
    for di in d.values():
        hp_list += di.values()
print(hp_list)
car["colors"] = ["red", "grey", "green", "beige"]
if "trim" in car:
    print("has trim key")
else:
    print("no trim key")
print(car["colors"])
print(car["image"])
