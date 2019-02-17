const initialState = {
    animals: ['----','Kangaroo'],
    zoos: ['----', 'Featherdale Wildlife Park'],
    
    encounterImage: require('../kangaroo-feeding.jpeg'),
    encounterName: 'Kangaroo Feeding',
    zooName: 'Featherdale Wildlife Park',
    zooWebsite: 'https://www.featherdale.com.au/',
    zooLocation: 'Sydney, Australia',
    encounterCost: 'Free',
    encounterSchedule: 'Every day',
    encounterDescription: 'Visitors can buy kangaroo feed for $2 and hand feed the kangaroos inside their enclosure.'
};

export default (state = initialState) => {
    return state;
}