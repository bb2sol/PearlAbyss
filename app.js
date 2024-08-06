const {MapleStoryApi, MapleStoryApiError} = require('maplestory-openapi');
const API_KEY = "test_61fb58429d9e9cf17f9c935c05c5ab7059c26d9910cc33ac27db57baec481874efe8d04e6d233bd35cf2fabdeb93fb0d";

const oguild_id = "a49101c48c6df3ee659ca79a03c0e760";

const list = [];
// $(document).ready(function() {
//     $.ajax({
//         url: 'https://open.api.nexon.com/maplestory/v1/guild/basic?oguild_id=a49101c48c6df3ee659ca79a03c0e760',
//         type: 'GET',
//         success: function(result) {
//             console.log(result);
//         }
//     })
// });


const urlString1 = "https://open.api.nexon.com/maplestory/v1/guild/basic?oguild_id=" + oguild_id;

const answer1 = fetch(urlString1, {
    headers:{
      "x-nxopen-api-key": API_KEY
    }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

console.log(answer1)

console.log(answer1.guild_member)

// const urlString2 = "https://open.api.nexon.com/maplestory/v1/guild/basic?oguild_id=" + oguild_id;
// const answer2 = fetch(urlString, {
//     headers:{
//       "x-nxopen-api-key": API_KEY
//     }
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error))


// characterbasic
//   access_flag


const api = new MapleStoryApi(API_KEY);

// try {
//   // run your code
  
//   const character = await api.getCharacter('비솔2');
//   const characterBasic = await api.getCharacterBasic(character.ocid);
  
//   console.log(characterBasic);
// } catch (e) {
//   // exception handling
  
//   if (e instanceof MapleStoryApiError) {
//     // handle MapleStoryApiError
//   } else {
//     // handle other errors
//   }
// }

async function callApi() {
    try {        
        const character = await api.getCharacter('비솔2');
        const characterBasic = await api.getCharacterBasic(character.ocid);
        
        console.log(characterBasic);
    } catch (e) {
        // exception handling
        
        if (e instanceof MapleStoryApiError) {
        // handle MapleStoryApiError
        } else {
        // handle other errors
        }
    }
}

callApi();