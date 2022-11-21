<?php

    require_once('header.php');

    class Pokemon {

        public $name;
        public $img;

        public function __construct($id) {
            $this->name = json_decode(file_get_contents('https://pokeapi.co/api/v2/pokemon-form/'.$id))->{'name'};
            $this->img = json_decode(file_get_contents('https://pokeapi.co/api/v2/pokemon-form/'.$id))->{'sprites'}->{'front_default'};
        }
    }

    echo '<table id="pokemons" class="display"><thead><tr>';
    echo '<th>id</th>';
    echo '<th>name</th>';
    echo '<th>image</th></tr></thead>';
    echo '<tbody>';
    for ($i=1; $i<20; ++$i) {
        $pokemon = new Pokemon($i);
        echo '<tr><td>'.$i.'</td>';
        echo '<td>'.$pokemon->name.'</td>';
        echo '<td><img src="'.$pokemon->img.'"></td></tr>';
    }
    echo '</tbody></table>';
?>