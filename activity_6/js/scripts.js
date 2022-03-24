var messages = [];
var messageType = 
{
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};
var data = [
    {
        type: messageType.out,
        user: 'Jason',
        message: 'do you have plans?'
    },
    {
        type: messageType.in,
        user: 'Joey',
        message: 'Yes I have class at 1:00'
    },
    {
        type: messageType.out,
        user: 'Jason',
        message: 'Sorry I forgot'
    }
];

function Message(type, user, message)
{
    this.type = type;
    this.user = user;
    this.message = message;
}

function createMessageElement(message)
{
    var messageText = document.createTextNode(
        message.user + ':' + message.message
    );
    
    var messageEL = document.createElement('div');
    messageEL.appendChild(messageText);
    messageEL.className = message.type;
    return messageEL;
}

function addMessageHandler(event)
{
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEL = document.getElementById('message-container');

    switch (event.target.id) 
    {
        case 'send-button':
            user = 'Jason'
            type = messageType.out;
        break;
        case 'reply-button':
            user = 'Joey'
            type = messageType.in;
        break;
        default:
            user = 'unknow';
            type = messageType.unknown;
    }

    if(messageInput.value != '')
    {
        var message = new Message(type, user, messageInput.value);
        messages.push(message);
        var el = createMessageElement(message);
        messagesContainerEL.appendChild(el);
        messageInput.value = '';
    }
}

function loadSeedData()
{
    for (var count=0; count < data.length; count++)
    {
        var message = new Message(data[count].type, data[count].user, data[count].message);
        messages.push(message);
    }
    
    var messagesContainerEL = document.getElementById('message-container');
    
    for(var count=0; count < messages.length; count++)
    {
        var message = messaes[count];
        var el = creatMessageElement(message)
        messagesContainerEL.appendChild(el);
    }
}

var init = function()
{
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;
    loadSeedData();
};

init();