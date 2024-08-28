<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "actualites";

// Créer une connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connexion échouée: " . $conn->connect_error);
}

$sql = "SELECT * FROM news";
$result = $conn->query($sql);

$news = array();
if ($result->num_rows > 0) {
    // Sortie des données de chaque ligne
    while($row = $result->fetch_assoc()) {
        $news[] = $row;
    }
} else {
    echo "0 résultats";
}
$conn->close();

echo json_encode($news);
?>
