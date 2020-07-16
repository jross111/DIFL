<link rel="stylesheet" href="//assets.squarewebsites.org/custom-filter/custom-filter.min.css"/>

<script>
window.customFilterSettings = {
    'targets': [{
        container: '#block-d3c82ac9d662a2119f56',
        items: '.summary-item',

        settings: {
            position: 'top',
            showItemsCount: false,
            filter: {
                enabled: true,
                category: false,
                tag: false,
                items: [{
                        name: 'Type of Buisness',
                        allLabel: '',
                        allOption: 'All',
                        allowedOptions: "Restaurant, Bakery, Cafe, Entertainment, Travel, Bar, Wine Bar, Pet Adoption, Salon, Studio, Gallery, Fitness, Location, Education, Barbershop, Shopping, Fashion",
                        multiple: false,
                        getAttr: 'categories'
                    },
                    {
                        name: 'Location',
                        allLabel: '',
                        allOption: 'All',
                        allowedOptions: "Manhattan, Brooklyn, Santa Monica, New Jersey, Los Angeles",
                        multiple: true,
                        getAttr: 'tags'
                    },
                    // {
                    //     name: 'State',
                    //     allLabel: '',
                    //     allOption: 'All', 
                    //     allowedOptions: "New York, New Jersey",
                    //     multiple: false,
                    //     getAttr: 'tags'

                    // }
                ]
            },
          	

        	search: {
            enabled: true,
            text: ''
            },
    }
    }]
}
</script>

<script src="//assets.squarewebsites.org/custom-filter/custom-filter.min.js"></script>