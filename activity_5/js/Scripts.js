(function() {

    var data = [
        {
            name: 'Rainbow Brackets',
            description: 'Add some fun into your editor with Rainbow Brackets!',
            author: '2gua',
            url: 'https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets',
            downloads: 1283743,
            stars: 75,
            price: 'Free',
            selector: 'p1'
        },
        {
            name: 'Indent Rainbow',
            description: 'The Indent Rainbow is a simple extension that colorizes the indentation in front of your text.',
            author: 'oderwat',
            url: 'https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow',
            downloads: 3016161,
            stars: 85,
            price: 'Free',
            selector: 'p2'
        }
    ];

    function Package(data)  {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads
        this.stars = data.stars
        this.selector = data.selector


        this.getFormattedDownlodes = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }




    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function(id) {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package) {
        var selector = package.selector,
            nameEl = getEl(selector+'-name'),
            descEl = getEl(selector+'-description'),
            authEL = getEl(selector+'-author'),
            downloadsEl = getEl(selector+'-downloads'),
            starsEl = getEl(selector+'-stars');

            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            authEL.textContent = package.author;
            downloadsEl.textContent = package.getFormattedDownlodes();
            starsEl.textContent = package.getFormattedStars();
    }


    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    /*var RainbowBrackets = new Package(data[0]);
    writePackageInfo(RainbowBrackets);

    var IndentRainbow  = new Package(data[1]);
    writePackageInfo(IndentRainbow);*/

    for (var i=0; i < data.length; i++)
    {
        var package = new Package(data[i]);
        writePackageInfo(package);
    }

}());