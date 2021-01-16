document.getElementById('btn').addEventListener('click' , ()=>{

    document.getElementById('btn').style = "background-color: #191a1c;"
    setTimeout(() => {
        document.getElementById('btn').style = "background-color: #34363A;"
    }, 400);

    let chat = "828320523";

    let token = "1507992211:AAF9xswgt5GgqwwMSktObz7edGqKq_e4G_Q";
    
    
    let name = document.getElementById('name').value;
    let sur_name = document.getElementById('sur_name').value;
    let phone = document.getElementById('phone').value;
    let age = document.getElementById('age').value;
    let ssn = document.getElementById('shvedStenName').value;
    let city = document.getElementById('city').value;
    let avenue = document.getElementById('avenue').value;
    let home_index = document.getElementById('home_index').value;
    let section = document.getElementById('section').value;
    let floor = document.getElementById('floor').value;
    let apartment = document.getElementById('apartment').value;
    let home = document.getElementById('home').value;
    let wall = document.getElementById('wall').value;
    let massage = `
    Имя: ${name}                                                                                                                                                      
    Фомилия: ${sur_name}                                                                                                                                                      
    Номер телефона: ${phone}                                                                                                                                                      
    Возраст: ${age}                                                                                                                                                      
    Модель шведской стенки: ${ssn}                                                                                                                                                      
    Город: ${city}                                                                                                                                                      
    Проспект: ${avenue}                                                                                                                                                      
    Номер дома: ${home_index}                                                                                                                                                      
    Секция: ${section}                                                                                                                                                      
    Этаж: ${floor}                                                                                                                                                      
    Квартира: ${apartment}                                                                                                                                                      
    Стена из: ${home}                                                                                                                                                      
    Серия дома: ${wall}                                                                                                                                                      
    `;
    
    if(document.getElementById('name').value == "") return
    if(document.getElementById('sur_name').value == "") return
    if(document.getElementById('phone').value == "") return
    if(document.getElementById('age').value == "") return
    if(document.getElementById('shvedStenName').value == "") return
    if(document.getElementById('city').value == "") return
    if(document.getElementById('avenue').value == "") return
    if(document.getElementById('home_index').value == "") return
    if(document.getElementById('section').value == "") return
    if(document.getElementById('floor').value == "") return
    if(document.getElementById('apartment').value == "") return
    if(document.getElementById('home').value == "") return
    if(document.getElementById('wall').value == "") return
    
    document.getElementById('name').value = ""
    document.getElementById('sur_name').value = ""
    document.getElementById('phone').value = ""
    document.getElementById('age').value = ""
    document.getElementById('shvedStenName').value = ""
    document.getElementById('city').value = ""
    document.getElementById('avenue').value = ""
    document.getElementById('home_index').value = ""
    document.getElementById('section').value = ""
    document.getElementById('floor').value = ""
    document.getElementById('apartment').value = ""
    document.getElementById('home').value = ""
    document.getElementById('wall').value = ""
    
    
    console.log('wwww')
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat}&text=${massage}`;
    
    let xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", url, true);
    xhttp.send();
});
