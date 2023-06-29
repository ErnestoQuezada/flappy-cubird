<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Successfully Payed|| Flappy Cubird</title>
    <link rel="icon" href="https://logodownload.org/wp-content/uploads/2017/06/bitcoin-logo-1-1.png">
    <style>
        *, *::after, *::before {
            margin: 0;
            padding: 0;
            outline: 0;
            box-sizing: border-box;
        }

        main {
            min-width: 100%;
            min-height: 100vh;
            background-image: url(./images/background.png);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .card {
            width: 30%;
            height: 70vh;
            background-color: rgb(0, 162, 255, 0.5);  
            backdrop-filter: blur(5px);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 12px black;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        h1 {
            font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            color: white;
            text-shadow : 0 0 10px rgb(0, 162, 255);
            text-align : center;
        }

        .img {
            width : 200px;
            header : 200px;
            align-self :center;
            margin : 30px 0 30px 0;
        }

        .send {
            width: 100%;
            height: 50px;
            background-color: teal;
            color: white;
            border: 1px black solid;
            border-radius: 10px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color ease-in-out 100ms;
        }
        
        .send:hover {
            background-color: rgb(0, 102, 128);
        }

    </style>
</head>
<body>
    <main>
        <div class="card">
            <h1> Payment Successfully Made! </h1>
            <img src="./images/check.png" alt="OK" class='img'>
            <input class="send" type="submit" value="Go Back" onclick="goBack()"/>
        </div>
    </main>

    <script>
        function goBack() {
            window.location.replace('./payinvoice.html')
        }
    </script>
</body>
</html>