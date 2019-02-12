//Simple Output
new Vue ({
    
    el: '#app',
    data: {
        
        title: 'Hello World!'
    }
    
});

//Simple Input
new Vue ({
    
    el: '#app2',
    data: {
        
        title: 'Hello World!'
        
    },
    
    methods: {
    
    changeTitle: function(event) {
    
    this.title= event.target.value;
    
    }
    
}
    
});

//Simple Method
new Vue ({
    
    el: '#app3',
    data: {
        
        title: 'Hello World!'
        
    },
    
    methods: {
    
    sayHello: function() {
    
    return 'Hello!';
    
    }
    
}
    
});

//Simple Method With Link (Binding Attribute)
new Vue ({
    
    el: '#app4',
    data: {
        
        title: 'Hello World!',
        link: 'http://google.com'
        
    },
    
    methods: {
    
    sayHello: function() {
    
    return this.title;
    
    }
    
}
    
});

//Preventing Override (V-Once)
new Vue ({
    
    el: '#app5',
    data: {
        
        title: 'Hello World!',
        link: 'http://google.com'
        
    },
    
    methods: {
    
    sayHello: function() {
    
        this.title = 'Hello!';
        return this.title;
    
    }
    
}
    
});

//Output Raw HTML (V-HTML)
new Vue ({
    
    el: '#app6',
    data: {
        
        title: 'Hello World!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>'
        
    },
    
    methods: {
    
    sayHello: function() {
    
        this.title = 'Hello!';
        return this.title;
    
    }
    
}
    
});

//Simple Counter
new Vue ({
    
    el: '#app7',
    data: {
        
        counter: 0
        
    },
    
    methods: {
    
    increase: function() {
    
        this.counter++;
    
    }
    
}
    
});

//Find Mouse Coordinates (Event Object)
new Vue ({
    
    el: '#app8',
    data: {
        
        x: 0,
        y: 0
        
    },
    
    methods: {
        
    updateCoordinates: function(event) {
        
        this.x = event.clientX;
        this.y = event.clientY;
        
    }
    
}
    
});

//Use Of Step (Pass Argument Through An Event)
new Vue ({
    
    el: '#app9',
    data: {
        
        counter: 0
        
    },
    
    methods: {
    
    increase: function(step) {
    
        this.counter += step;
    
    }
    
}
    
});

//Find Mouse Coordinates (Event Object)
new Vue ({
    
    el: '#app10',
    data: {
        
        x: 0,
        y: 0
        
    },
    
    methods: {
        
    updateCoordinates: function(event) {
        
        this.x = event.clientX;
        this.y = event.clientY;
        
    },
        
    dummy: function(event) {
        
        event.stopPropagation();
        
    }
    
}
    
});

//Simple Keyboard Event
new Vue ({
    
    el: '#app11',
    
    methods: {
    
    alertMe: function() {
    
    alert('Alert!');
    
    }
    
}
    
});

//Update Name (Two Way Binding)
new Vue ({
    
    el: '#app12',
    data: {
        
      name: 'Robert'  
        
    },
    
    methods: {
    
    alertMe: function() {
    
    alert('Alert!');
    
    }
    
}
    
});

//Increase & Decrease Counter (Computed Properties)
new Vue ({
    
    el: '#app13',
    data: {
        
      counter: 0,
      secondCounter: 0
        
    },
    
    computed: {
        
        output: function() {

            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';

        }
        
    },
    
    methods: {
    
        result: function() {

            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';

        }
    
    }
    
});

//Reset Counter To 0 After 2 Seconds (Watch)
new Vue ({
    
    el: '#app14',
    data: {
        
      counter: 0,
      secondCounter: 0
        
    },
    
    computed: {
        
        output: function() {

            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';

        }
        
    },
    
    watch: {
        
        counter: function(value) {
            
            var vm = this;
            setTimeout(function() {
                
                vm.counter = 0;
                
            }, 2000);
            
        }
        
    },
    
    methods: {
    
        result: function() {

            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';

        }
    
    }
    
});

//Dynamic CSS Styling
new Vue ({
    
    el: '#app15',
    data: {
        
        attachRed: false,
        attachYellow: false,
        attachBlue: false
        
    }
    
});

//Dynamic CSS Styling (Example Two)
new Vue ({
    
    el: '#app16',
    data: {
        
        attachRed: false,
        
    },
    
    computed: {
        
        divClasses: function() {
            
            return {
                
                red: this.attachRed,
                blue: !this.attachRed
                
            };
            
        }
        
    }
    
});

//Dynamic CSS Styling (Example Three)
new Vue ({
    
    el: '#app17',
    data: {
        
        color: 'yellow'
        
    }
    
});

//Dynamic CSS Styling (Example Four)
new Vue ({
    
    el: '#app18',
    data: {
        
        color: 'gray',
        width: 100
        
    },
    
    computed: {
        
        myStyle: function() {
            
            return{
                
                backgroundColor: this.color,
                width: this.width + 'px'
                
            };
            
        }
        
    }
    
});

//Dynamic CSS Styling (Example Five)
new Vue ({
    
    el: '#app19',
    data: {
        
        color: 'gray',
        width: 100
        
    },
    
    computed: {
        
        myStyle: function() {
            
            return{
                
                backgroundColor: this.color,
                width: this.width + 'px'
                
            };
            
        }
        
    }
    
});

//Show or Hide (v-if & v-else)
new Vue ({
    
    el: '#app20',
    data: {
        
        show: true
        
    }
    
});

//Show or Hide (v-if wrapped in template tag)
new Vue ({
    
    el: '#app21',
    data: {
        
        show: true
        
    }
    
});

//Show or Hide (Using v-show instead)
new Vue ({
    
    el: '#app22',
    data: {
        
        show: true
        
    }
    
});

//Rendering Lists From An Array (Using v-for)
new Vue ({
    
    el: '#app23',
    data: {
        
        ingredients: ['meat', 'fruit', 'cookies']
        
    }
    
});

//Getting The Index From An Array
new Vue ({
    
    el: '#app24',
    data: {
        
        ingredients: ['meat', 'fruit', 'cookies']
        
    }
    
});

//Rendering Lists From An Array (Using a template tag)
new Vue ({
    
    el: '#app25',
    data: {
        
        ingredients: ['meat', 'fruit', 'cookies']
        
    }
    
});

//Looping Through Objects
new Vue ({
    
    el: '#app26',
    data: {
        
        persons: [
            
            {name: 'John H.', age: 68, color: 'gold'},
            
            {name: 'Dennis N.', age: 'unknown', color: 'green'}
        
        ]
        
    }
    
});

//Looping Through Objects (Example Two)
new Vue ({
    
    el: '#app27',
    data: {
        
        persons: [
            
            {name: 'John H.', age: 68, color: 'gold'},
            
            {name: 'Dennis N.', age: 'unknown', color: 'green'}
        
        ]
        
    }
    
});

//Looping Through Objects (Example Three)
new Vue ({
    
    el: '#app28',
    data: {
        
        persons: [
            
            {name: 'John H.', age: 68, color: 'gold'},
            
            {name: 'Dennis N.', age: 'unknown', color: 'green'}
        
        ]
        
    }
    
});

//Looping Through Objects (Example Three)
new Vue ({
    
    el: '#app29',
    data: {
        
        persons: [
            
            {name: 'John H.', age: 68, color: 'gold'},
            
            {name: 'Dennis N.', age: 'unknown', color: 'green'}
        
        ]
        
    }
    
});

//Looping Through Objects (Example Five)
new Vue ({
    
    el: '#app31',
    data: {
        
        ingredients: ['meat', 'fruit', 'cookies']
        
    }
    
});