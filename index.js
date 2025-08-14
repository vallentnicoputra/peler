<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
<meta name="viewport" content="width=800">
    <title>Pemberitahuan Maintenance</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts: Caveat (Handwriting font) & Poppins (for signature) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Poppins:wght@600&display=swap" rel="stylesheet">

    <style>
        /* Custom styles for the notebook theme */
        body {
            /* Corkboard background texture */
            background-color: #d2b48c;
            background-image: url('https://www.transparenttextures.com/patterns/cork-wallet.png');
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 2rem;
            font-family: 'Caveat', cursive;
        }

        .notebook-paper {
            position: relative;
            background-color: #fff;
            /* Creating the blue horizontal lines */
            background-image: 
                linear-gradient(#e8f2ff 1px, transparent 1px),
                /* Creating the red vertical line */
                linear-gradient(to right, #ffc4c4 1px, transparent 1px);
            background-size: 100% 2.5rem, 100% 100%;
            background-position: 0 0, 3rem 0;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            padding: 4rem 2rem 2rem 4rem; /* More padding on the left for the red line */
            color: #2c3e50;
            max-width: 800px;
            width: 100%;
        }

        .pin {
            position: absolute;
            top: 1rem;
            left: 50%;
            transform: translateX(-50%);
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, #ff6b6b, #c44d4d);
            box-shadow: 0 3px 5px rgba(0,0,0,0.4);
            z-index: 10;
        }
        
        .pin::after {
            content: '';
            position: absolute;
            top: 25%;
            left: 25%;
            width: 50%;
            height: 50%;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
        }

        /* Adjusting font sizes for the handwriting style */
        .notebook-paper h1 {
            font-size: 4rem;
            line-height: 1;
            font-weight: 700;
            margin-bottom: 2rem;
        }

        .notebook-paper p {
            font-size: 1.75rem;
            line-height: 1.5; /* Adjusted for better readability on lined paper */
            margin-bottom: 2.5rem;
        }

        .signature {
            font-family: 'Poppins', sans-serif; /* A more standard font for the signature title */
            font-size: 1rem;
            text-align: right;
            margin-top: 3rem;
            color: #34495e;
        }
        
        .signature-name {
            font-family: 'Caveat', cursive;
            font-size: 2.5rem;
            font-weight: 700;
            color: #2980b9;
            transform: rotate(-3deg);
            display: block;
        }

        .content-flex {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        @media (min-width: 768px) {
            .content-flex {
                flex-direction: row;
                align-items: flex-start;
                gap: 2rem;
            }
        }

    </style>
</head>
<body>

    <main class="notebook-paper">
        <div class="pin"></div>
        
        <h1 class="text-center">Pemberitahuan Maintenance</h1>

        <div class="content-flex">
            <div class="flex-shrink-0 mb-8 md:mb-0">
                <img src="https://i.gifer.com/YAg6.gif" alt="Under Construction GIF" class="w-48 h-48 mx-auto" onerror="this.style.display='none'">
            </div>
            <div class="flex-grow">
                 <p>
                    Website saat ini sedang dalam proses maintenance karena munculnya beberapa bug akibat perubahan besar-besaran. Tim developer sedang bekerja dengan fokus dan penuh dedikasi untuk memperbaiki semua masalah secepat mungkin.
                </p>
                <p>
                    Proses maintenance ini mungkin akan memakan waktu sedikit lebih lama dari biasanya, namun hal ini dilakukan demi memastikan kualitas dan stabilitas website. Sebagai hasilnya, pengguna nantinya akan mendapatkan berbagai fitur baru yang lebih canggih, fungsional, dan mampu meningkatkan pengalaman penggunaan.
                </p>
            </div>
        </div>

        <div class="signature">
            Kami menghargai kesabaran Anda,
            <span class="signature-name">Maslent API's</span>
        </div>
    </main>

</body>
</html>
