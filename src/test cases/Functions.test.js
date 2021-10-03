import { DetermineVotes, BuildDogCard } from '../components/Functions'

const state1 = {dogListReducer:{dogList:[{breeds:[],id:'BJZlTPpVX',url:'https://cdn2.thedogapi.com/images/BJZlTPpVX.gif',width:450,height:250},{breeds:[],id:'HJccBTpE7',url:'https://cdn2.thedogapi.com/images/HJccBTpE7.gif',width:1400,height:1050},{breeds:[],id:'Sk67KO2rX',url:'https://cdn2.thedogapi.com/images/Sk67KO2rX_1280.jpg',width:1024,height:683},{breeds:[{weight:{imperial:'40 - 65',metric:'18 - 29'},height:{imperial:'21 - 23',metric:'53 - 58'},id:4,name:'Airedale Terrier',bred_for:'Badger, otter hunting',breed_group:'Terrier',life_span:'10 - 13 years',temperament:'Outgoing, Friendly, Alert, Confident, Intelligent, Courageous',origin:'United Kingdom, England',reference_image_id:'1-7cgoZSh'}],id:'QWRBrrIvB',url:'https://cdn2.thedogapi.com/images/QWRBrrIvB.jpg',width:1600,height:1200},{breeds:[{weight:{imperial:'38 - 50',metric:'17 - 23'},height:{imperial:'23 - 26',metric:'58 - 66'},id:8,name:'Alaskan Husky',bred_for:'Sled pulling',breed_group:'Mixed',life_span:'10 - 13 years',temperament:'Friendly, Energetic, Loyal, Gentle, Confident',reference_image_id:'-HgpNnGXl'}],id:'uEPB98jBS',url:'https://cdn2.thedogapi.com/images/uEPB98jBS.jpg',width:1200,height:650},{breeds:[],id:'748GZO7ss',url:'https://cdn2.thedogapi.com/images/748GZO7ss.jpg',width:1280,height:720},{breeds:[{weight:{imperial:'23 - 28',metric:'10 - 13'},height:{imperial:'15.5 - 20',metric:'39 - 51'},id:111,name:'Finnish Spitz',bred_for:'Hunting birds, small mammals',breed_group:'Non-Sporting',life_span:'12 - 15 years',temperament:'Playful, Loyal, Independent, Intelligent, Happy, Vocal',reference_image_id:'3PjHlQbkV'}],id:'J5xkGtEU3',url:'https://cdn2.thedogapi.com/images/J5xkGtEU3.jpg',width:519,height:432},{breeds:[{weight:{imperial:'17 - 23',metric:'8 - 10'},height:{imperial:'13.5 - 16.5',metric:'34 - 42'},id:222,name:'Shiba Inu',bred_for:'Hunting in the mountains of Japan, Alert Watchdog',breed_group:'Non-Sporting',life_span:'12 - 16 years',temperament:'Charming, Fearless, Keen, Alert, Confident, Faithful',reference_image_id:'Zn3IjPX3f'}],id:'4hsn54Wod',url:'https://cdn2.thedogapi.com/images/4hsn54Wod.jpg',width:1080,height:1080},{breeds:[],id:'wM40j-90o',url:'https://cdn2.thedogapi.com/images/wM40j-90o.jpg',width:590,height:380},{breeds:[],id:'iIbhwEJKo',url:'https://cdn2.thedogapi.com/images/iIbhwEJKo.jpg',width:1024,height:768}]},unitReducer:{unit:'imperial'},votesArrayReducer:{votesArray:[{id:47727,image_id:'HJOpge9Em',sub_id:null,created_at:'2021-10-02T08:45:05.000Z',value:1,country_code:'IN'},{id:47728,image_id:'BkE6Wg5E7',sub_id:null,created_at:'2021-10-02T10:01:27.000Z',value:1,country_code:'IN'},{id:47729,image_id:'asf2',sub_id:'my-user-1234',created_at:'2021-10-02T11:02:19.000Z',value:1,country_code:'US'},{id:47730,image_id:'SyNQKd3HQ',sub_id:null,created_at:'2021-10-02T11:12:17.000Z',value:1,country_code:'IN'},{id:47731,image_id:'HJ5nXpT4Q',sub_id:null,created_at:'2021-10-02T11:42:26.000Z',value:1,country_code:'IN'},{id:47732,image_id:'HkAVQl9VX',sub_id:null,created_at:'2021-10-02T12:20:36.000Z',value:1,country_code:'IN'},{id:47733,image_id:'HkNS3gqEm',sub_id:null,created_at:'2021-10-02T12:20:47.000Z',value:1,country_code:'IN'},{id:47734,image_id:'By4A-eqVX',sub_id:null,created_at:'2021-10-02T12:54:07.000Z',value:1,country_code:'IN'},{id:47735,image_id:'SJ5vzx5NX',sub_id:null,created_at:'2021-10-02T12:54:20.000Z',value:1,country_code:'IN'},{id:47736,image_id:'rJO6cQoVQ',sub_id:null,created_at:'2021-10-02T12:54:22.000Z',value:1,country_code:'IN'},{id:47737,image_id:'SyPvYOhHm',sub_id:null,created_at:'2021-10-02T12:54:24.000Z',value:1,country_code:'IN'},{id:47738,image_id:'8URVacxGi',sub_id:null,created_at:'2021-10-02T12:54:26.000Z',value:1,country_code:'IN'},{id:47739,image_id:'HJHmix5NQ',sub_id:null,created_at:'2021-10-02T12:56:19.000Z',value:1,country_code:'IN'},{id:47740,image_id:'r156pDT4m',sub_id:null,created_at:'2021-10-02T12:58:57.000Z',value:1,country_code:'IN'},{id:47741,image_id:'Syszjx9Em',sub_id:null,created_at:'2021-10-02T13:20:31.000Z',value:1,country_code:'IN'},{id:47742,image_id:'HJHmix5NQ',sub_id:null,created_at:'2021-10-02T13:23:59.000Z',value:1,country_code:'IN'},{id:47743,image_id:'h0vltXvfC',sub_id:null,created_at:'2021-10-02T13:24:02.000Z',value:1,country_code:'IN'},{id:47744,image_id:'rkiByec47',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47745,image_id:'rkiByec47',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47746,image_id:'8URVacxGi',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47747,image_id:'8URVacxGi',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47748,image_id:'qBYpfkZr1',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47749,image_id:'qBYpfkZr1',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47750,image_id:'-dncpykkP',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47751,image_id:'-dncpykkP',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47752,image_id:'YNDcKGXbi',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47753,image_id:'YNDcKGXbi',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47754,image_id:'hS_-gIE3G',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47755,image_id:'hS_-gIE3G',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47756,image_id:'keAvlc5KL',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47757,image_id:'keAvlc5KL',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47758,image_id:'ZRQ0TYzz6',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47759,image_id:'ZRQ0TYzz6',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47760,image_id:'1MZ0YbOpS',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47761,image_id:'1MZ0YbOpS',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47762,image_id:'1tFqa1u9o',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47763,image_id:'1tFqa1u9o',sub_id:null,created_at:'2021-10-02T13:24:08.000Z',value:1,country_code:'IN'},{id:47764,image_id:'rJIakgc4m',sub_id:null,created_at:'2021-10-02T13:24:32.000Z',value:1,country_code:'IN'},{id:47765,image_id:'SJyBfg5NX',sub_id:null,created_at:'2021-10-02T13:26:05.000Z',value:1,country_code:'IN'},{id:47766,image_id:'HJHmix5NQ',sub_id:null,created_at:'2021-10-02T13:26:09.000Z',value:1,country_code:'IN'},{id:47767,image_id:'SyU12l9V7',sub_id:null,created_at:'2021-10-02T13:26:11.000Z',value:1,country_code:'IN'},{id:47768,image_id:'SyU12l9V7',sub_id:null,created_at:'2021-10-02T13:26:11.000Z',value:1,country_code:'IN'},{id:47769,image_id:'HyWGexcVQ',sub_id:null,created_at:'2021-10-02T13:27:57.000Z',value:1,country_code:'IN'},{id:47770,image_id:'B8zP8i5W5',sub_id:null,created_at:'2021-10-02T13:30:30.000Z',value:1,country_code:'IN'},{id:47771,image_id:'B13NtuhSm',sub_id:null,created_at:'2021-10-02T13:31:06.000Z',value:1,country_code:'IN'},{id:47772,image_id:'HJ-YF_hHQ',sub_id:null,created_at:'2021-10-02T13:32:49.000Z',value:1,country_code:'IN'},{id:47773,image_id:'Vsyiy9oyS',sub_id:null,created_at:'2021-10-02T13:32:52.000Z',value:1,country_code:'IN'},{id:47774,image_id:'Sk4DXl54m',sub_id:null,created_at:'2021-10-02T13:33:12.000Z',value:1,country_code:'IN'},{id:47775,image_id:'rJFJVxc4m',sub_id:null,created_at:'2021-10-02T13:33:16.000Z',value:1,country_code:'IN'},{id:47776,image_id:'HkNS3gqEm',sub_id:null,created_at:'2021-10-02T13:33:18.000Z',value:1,country_code:'IN'},{id:47777,image_id:'5i89L75D9',sub_id:null,created_at:'2021-10-02T13:33:19.000Z',value:1,country_code:'IN'},{id:47778,image_id:'B1Edfl9NX',sub_id:null,created_at:'2021-10-02T13:33:49.000Z',value:1,country_code:'IN'},{id:47779,image_id:'B1Edfl9NX',sub_id:null,created_at:'2021-10-02T13:33:50.000Z',value:1,country_code:'IN'},{id:47780,image_id:'B1Edfl9NX',sub_id:null,created_at:'2021-10-02T13:33:50.000Z',value:1,country_code:'IN'},{id:47781,image_id:'B1Edfl9NX',sub_id:null,created_at:'2021-10-02T13:33:51.000Z',value:1,country_code:'IN'},{id:47782,image_id:'B1Edfl9NX',sub_id:null,created_at:'2021-10-02T13:33:51.000Z',value:1,country_code:'IN'},{id:47783,image_id:'B1Edfl9NX',sub_id:null,created_at:'2021-10-02T13:33:51.000Z',value:1,country_code:'IN'},{id:47784,image_id:'B1Edfl9NX',sub_id:null,created_at:'2021-10-02T13:33:51.000Z',value:1,country_code:'IN'},{id:47785,image_id:'B1Edfl9NX',sub_id:null,created_at:'2021-10-02T13:33:51.000Z',value:1,country_code:'IN'},{id:47786,image_id:'B1Edfl9NX',sub_id:null,created_at:'2021-10-02T13:33:51.000Z',value:1,country_code:'IN'},{id:47787,image_id:'B1Edfl9NX',sub_id:null,created_at:'2021-10-02T13:34:37.000Z',value:1,country_code:'IN'},{id:47788,image_id:'rJIakgc4m',sub_id:null,created_at:'2021-10-02T13:38:39.000Z',value:1,country_code:'IN'},{id:47789,image_id:'rJIakgc4m',sub_id:null,created_at:'2021-10-02T13:38:40.000Z',value:1,country_code:'IN'},{id:47790,image_id:'rJIakgc4m',sub_id:null,created_at:'2021-10-02T13:38:40.000Z',value:1,country_code:'IN'},{id:47791,image_id:'rJIakgc4m',sub_id:null,created_at:'2021-10-02T13:38:41.000Z',value:1,country_code:'IN'},{id:47792,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:41.000Z',value:1,country_code:'IN'},{id:47793,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:41.000Z',value:1,country_code:'IN'},{id:47794,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:41.000Z',value:1,country_code:'IN'},{id:47795,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:43.000Z',value:1,country_code:'IN'},{id:47796,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:43.000Z',value:1,country_code:'IN'},{id:47797,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:44.000Z',value:1,country_code:'IN'},{id:47798,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:44.000Z',value:1,country_code:'IN'},{id:47799,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:44.000Z',value:1,country_code:'IN'},{id:47800,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:44.000Z',value:1,country_code:'IN'},{id:47801,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:44.000Z',value:1,country_code:'IN'},{id:47802,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:44.000Z',value:1,country_code:'IN'},{id:47803,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:45.000Z',value:1,country_code:'IN'},{id:47804,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:45.000Z',value:1,country_code:'IN'},{id:47805,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:45.000Z',value:1,country_code:'IN'},{id:47806,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:45.000Z',value:1,country_code:'IN'},{id:47807,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:45.000Z',value:1,country_code:'IN'},{id:47808,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:46.000Z',value:1,country_code:'IN'},{id:47809,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:46.000Z',value:1,country_code:'IN'},{id:47810,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:46.000Z',value:1,country_code:'IN'},{id:47811,image_id:'S1T8Ee9Nm',sub_id:null,created_at:'2021-10-02T13:38:46.000Z',value:1,country_code:'IN'},{id:47812,image_id:'rkiByec47',sub_id:null,created_at:'2021-10-02T14:53:44.000Z',value:1,country_code:'IN'},{id:47813,image_id:'HkZ57lq4m',sub_id:null,created_at:'2021-10-02T14:53:46.000Z',value:1,country_code:'IN'},{id:47815,image_id:'Q2KxfeDLb',sub_id:null,created_at:'2021-10-02T15:27:13.000Z',value:1,country_code:'IN'},{id:47817,image_id:'sfMkLH0cj',sub_id:null,created_at:'2021-10-02T16:31:50.000Z',value:1,country_code:'IN'},{id:47818,image_id:'SJAnzg9NX',sub_id:null,created_at:'2021-10-02T16:40:40.000Z',value:1,country_code:'IN'},{id:47819,image_id:'rVXxoWhCR',sub_id:null,created_at:'2021-10-02T16:41:11.000Z',value:1,country_code:'IN'},{id:47820,image_id:'rVXxoWhCR',sub_id:null,created_at:'2021-10-02T16:41:29.000Z',value:1,country_code:'IN'},{id:47821,image_id:'S1_8kx5Nm',sub_id:null,created_at:'2021-10-02T16:42:34.000Z',value:1,country_code:'IN'},{id:47822,image_id:'S1_8kx5Nm',sub_id:null,created_at:'2021-10-02T16:42:41.000Z',value:1,country_code:'IN'},{id:47823,image_id:'S1_8kx5Nm',sub_id:null,created_at:'2021-10-02T16:42:42.000Z',value:1,country_code:'IN'},{id:47824,image_id:'HJMzEl5N7',sub_id:null,created_at:'2021-10-02T16:45:26.000Z',value:1,country_code:'IN'},{id:47825,image_id:'2Y-PXyVC9',sub_id:null,created_at:'2021-10-02T16:45:27.000Z',value:1,country_code:'IN'},{id:47826,image_id:'A3mLu3WQ2',sub_id:null,created_at:'2021-10-02T16:46:27.000Z',value:1,country_code:'IN'},{id:47827,image_id:'kzcMOroSg',sub_id:null,created_at:'2021-10-02T16:46:29.000Z',value:1,country_code:'IN'},{id:47828,image_id:'uFQ94lGDH',sub_id:null,created_at:'2021-10-02T16:46:31.000Z',value:1,country_code:'IN'}]}}

test('check if DetermineVotes function is returning an array of length 10', ()=>{
    expect(DetermineVotes(state1.votesArrayReducer.votesArray, state1.dogListReducer.dogList)).toHaveLength(10)
})

test('check if the BuildDogCard array returns an array of length 8 with imperial unit', ()=>{
    expect(BuildDogCard(state1.dogListReducer.dogList[0], 'imperial')).toHaveLength(8)
})

test('check if the BuildDogCard array returns an array of length 8 with metric unit', ()=>{
    expect(BuildDogCard(state1.dogListReducer.dogList[0], 'metric')).toHaveLength(8)
})

test('check if the BuildDogCard array returns an array of length 0 when empty dog object is passed', ()=>{
    expect(BuildDogCard({}, 'imperial')).toHaveLength(0)
})

test('check if the BuildDogCard array returns an array of length 8 when a dog with image url and all other properties null is passed', ()=>{
    expect(BuildDogCard({url: "dummy"}, 'imperial')).toHaveLength(8)
})

test('check if the BuildDogCard array returns an array of length 8 when a dog with dummy breeds data is passed', ()=>{
    expect(BuildDogCard(
        {
            url: "dummy", 
            breeds:[
                {dummyValue: "dummy"}
            ]
        }, 'imperial')).toHaveLength(8)
})

test('check if the BuildDogCard array returns an array of length 8 when a dummy unit is passed', ()=>{
    expect(BuildDogCard(state1.dogListReducer.dogList[3], 'xyz')).toHaveLength(8)
})