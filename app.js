var product = document.querySelector(".product");

const getData = async () => {
    await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => displayData(json))
        .catch((err) => {
            console.log(err);
        });
};

getData();

function displayData(data) {
    console.log(data);

    // const li = document.createElement("li");
    // product.appendChild(li);
    // li.innerHTML = data[0].name;

    // const li2 = document.createElement("li");
    // product.appendChild(li2);
    // li2.innerHTML = data[1].name;

    // data.map((user) => {
    //     const div = document.createElement("div");
    //     div.classList.add("productItems");
    //     product.appendChild(div);
    //     const price = document.createElement("p");
    //     div.appendChild(price);
    //     price.innerHTML = user.name
    //     const image = document.createElement("img");
    //     div.appendChild(image);
    //     image.src = user.image
    //     const title = document.createElement("h3");
    //     div.appendChild(title);
    //     title.innerHTML = user.email
    //     // const address = document.createElement("span");
    //     // div.appendChild(address);
    //     // address.innerHTML = user.address.city
    // });

    Object.keys(data).forEach(function (key, index) {
        // data[key]
        const div = document.createElement("div");
        div.classList.add("productItems");
        product.appendChild(div);
        const image = document.createElement("img");
        image.classList.add("img");
        div.appendChild(image);
        image.src = data[key].image;
        const title = document.createElement("h3");
        div.appendChild(title);
        title.innerHTML = data[key].title;
        const image2 = document.createElement("img");
        image2.classList.add("icon");
        div.appendChild(image2);
        image2.src = `data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e`;
        const rate = document.createElement("h4");
        rate.classList.add("rate");
        div.appendChild(rate);
        rate.innerHTML = data[key].rating.rate + ` (${data[key].rating.count} оценка)`;
        const price = document.createElement("p");
        div.appendChild(price);
        price.innerHTML = "Price : " + data[key].price;
    });
}
