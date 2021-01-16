document.getElementById('btn').addEventListener('click' , ()=>{
    let chat = "828320523";

    let token = "1507992211:AAF9xswgt5GgqwwMSktObz7edGqKq_e4G_Q";
    
    
    let name = document.getElementById('name').value;
    let sur_name = document.getElementById('sur_name').value;
    let phone = document.getElementById('phone').value;
    let age = document.getElementById('age').value;
    let ssn = document.getElementById('shvedStenName').value;
    let city = document.getElementById('city').value;
    let avenue = document.getElementById('avenue').value;
    let home_index = document.getElementById('chome_indexity').value;
    let section = document.getElementById('section').value;
    let floor = document.getElementById('floor').value;
    let apartment = document.getElementById('apartment').value;
    let hame = document.getElementById('hame').value;
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
        Стена из: ${hame}                                                                                                                                                      
        Серия дома: ${wall}                                                                                                                                                      
        `;

    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatц}&text=${massage}`;
    
    let xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", url, true);
    xhttp.send();
});
