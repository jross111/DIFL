<script>
window.customFilterSettings = {
    'targets': [{
        container: '#block-d3c82ac9d662a2119f56',//css selector to target container where you want to place filter
        items: '.summary-item',//css selector for items you want to filter
        settings: {
            // collectionUrl: '/locals',//set this parameter manually if filter can't fill you collection, it should be your source collection link
          anim: true,
          show: {
            effect: 'scale',
            transitionDuration: 800,
            stagger: 60
          },
          hide: {
            effect: 'scale',
            transitionDuration: 100,
            stagger: 18
          },

      },

    }]
};



</script>
window.customFilterSettings = {
    'targets': [{
        container: '#block-d3c82ac9d662a2119f56',//css selector to target container where you want to place filter
        items: '.summary-item',//css selector for items you want to filter
        settings: {
            collectionUrl: '/locals',//set this parameter manually if filter can't fill you collection, it should be your source collection link
            effect: 'scale',
            transitionDuration: 800,
            stagger: 60
          },
            hide: {
            effect: 'scale',
            transitionDuration: 100,
            stagger: 18
          },
    }]
};


    'targets': [
    {
        container: '#block-yui_3_17_2_2_1514377351444_23783',//new summary id
        items: '.summary-item',
        settings:
        {
            position: 'left',//may be 'top','left' or 'right'
            align: 'left',//align filter and sort blocks, use 'left','center' or 'right'
            showItemsCount: false, //hide items count
            keepDropdownsOpen: true,//keep filter and sort dropdowns open
            initState:{sort:['price|asc'],filter:['Products|Clothing']},//this is how to set start filter parameters
            simpleFilter:
            {
                anim: true,//enables animation
                show:
                {
                    effect: 'slideLeft',//available anims: 'fade','scale','slideLeft','slideTop','slideRight','slideBottom'
                    transitionDuration: 500, //anim duration
                    stagger: 60 //items anim delay
                },
                hide:
                {
                    effect: 'slideRight',
                    transitionDuration: 100,
                    stagger: 18
                }
            },
            filter:
            {
                enabled: true,//enabling filter (enabled by default)
                category: false,//disabling default category dropdown
                tag: false,//disabling default tag dropdown
                items: [
                {
                    name: 'Products',//naming our new filter
                    options: [],//we may set predefined options here, but we do not want, let options build from existing 
                    allowedOptions: ['Electronics', 'Clothing', 'Speakers'], // if this is defined, only these options will be added to dropdown if existing in items
                    allLabel: 'All',//you may change just label word if use dropdowns view
                    allOption: 'All',//change the actual value Fiter gives for all items, useful in breadcrumbs or buttons view
                    multiple: true,//allow several items be selected
                    logic: 'and',// set the logic how filter dropdowns combined, default is 'or'
                    multipleLogic: 'and',// this set the logic how options under current dropdown combined, default is 'or'
                    defined: false,//set the first parameter active
                    strict: true,//find items stict or like. if false and select Electronic, items with Electronics and Electonics Books will be showed
                    sort: 'asAllowed',//sort dropdown parameters exactly in the order you set in allowedOptions, by default it sorts in 'asc', you may also set 'desc' here
                    getAttr: 'categories'//get values from item categories
                },
                {
                    name: 'Type',
                    multiple: false,
                    strict: true,
                    getAttr: 'tags'//get values from items tags
                }]
            },
            sort:
            {
                enabled: true,
                items: [
                {
                    name: 'Price',//name of sort parameter, price is predefined and you do not need more params here
                    order: 'asc|desc'//add asc and desc order to parameters
                }]
            }
        }
    }         
  ]
};