const json = {
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "healthStatus",
        "title": "How do you rate your health status? ",
        "isRequired": true,
        "choices": [
         {
          "value": "Very Good",
          "text": "Very Good"
         },
         {
          "value": "Good",
          "text": " Good"
         },
         {
          "value": "Satisfactory",
          "text": "Satisfactory"
         },
         {
          "value": "Not So Good",
          "text": "Not So Good"
         },
         {
          "value": "Bad",
          "text": "Bad"
         }
        ]
       },
       {
        "type": "checkbox",
        "name": "healthProblems",
        "title": "Any health problem: ",
        "isRequired": true,
        "choices": [
         {
          "value": "Diabetic",
          "text": "Diabetic"
         },
         {
          "value": "Hypertension (Blood Pressure)",
          "text": "Hypertension (Blood Pressure)"
         },
         {
          "value": "Asthma",
          "text": " Asthma"
         },
         {
          "value": "Skin problems",
          "text": "Skin problems "
         },
         {
          "value": "Digestive System Problem",
          "text": "Digestive System Problem"
         }
        ],
        "hasOther": true,
        "otherText": "Any Other (Specify)"
       },
       {
        "type": "radiogroup",
        "name": "problemDuration",
        "title": "Please mention the duration of your health problem",
        "isRequired": true,
        "choices": [
         {
          "value": "Less than 1 year  ",
          "text": "Less than 1 year  "
         },
         {
          "value": "1-5 Years",
          "text": "1-5 Years"
         },
         {
          "value": "5-10 Years",
          "text": "5-10 Years"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "underMedication",
        "title": "Are you under medication for your health Problem:  ",
        "isRequired": true,
        "choices": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "surgery",
        "title": "Have you undergone any surgery :",
        "isRequired": true,
        "choices": [
         {
          "value": "No",
          "text": "No"
         }
        ],
        "hasOther": true,
        "otherText": "Yes Minor/Major and when"
       }
      ],
      "title": "Multidimensional support with assistive technologies for the aging population in India",
      "description": "III.\tBio-Psycho-Social Health Profile"
     }
    ]
   };
export default json;