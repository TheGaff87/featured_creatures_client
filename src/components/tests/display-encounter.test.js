import React from 'react';
import {shallow} from 'enzyme';
import {DisplayEncounter} from '../display-encounter';

describe('<DisplayEncounter />', () => {
    it('Renders without crashing', () => {
        const encounters =[
            {
                animal : "KANGAROO",
                encounterImage: "https://featured-creatures-api.herokuapp.com/images/kangaroo-feeding.jpeg",
                encounterName : "Kangaroo Feeding",
                zooName : "FEATHERDALE WILDLIFE PARK",
                zooWebsite : "https://www.featherdale.com.au/",
                zooLocation: "Sydney, Australia",
                encounterCost : "Free",
                encounterSchedule : "Everyday",
                encounterDescription : "Visitors can buy kangaroo feed for $2 and hand feed the kangaroos inside their enclosure.",
                addedBy : "user1"
            },
            {
                animal : "KOALA",
                encounterImage: "https://featured-creatures-api.herokuapp.com/images/koala-encounter.jpg",
                encounterName : "Koala Encounter",
                zooName : "FEATHERDALE WILDLIFE PARK",
                zooWebsite : "https://www.featherdale.com.au/",
                zooLocation: "Sydney, Australia",
                encounterCost : "$25 AUD",
                encounterSchedule : "Everyday",
                encounterDescription : "Visitors pose for a photo with a koala. You may pet the koala, but it is illegal to hold koalas without the proper certification in New South Wales.",
                addedBy : "user2"
            }
        ]
        shallow(<DisplayEncounter encounters={encounters} />);
    });
});




