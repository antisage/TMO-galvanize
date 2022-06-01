import './App.css';

var recipes = []; 

function showForm() {
  document.getElementById("recipe_form").style.visibility = "visible";
}

function showRecipes() {
  var out_text = "";
  if (recipes.length < 1) {
	  out_text = "<dl> There are no recipes to list </dl>";
	 document.getElementById("recipe_list").innerHTML = out_text;
  } else {
	 out_text = "<ul>";
	 for (let i = 0; i < recipes.length; i++) {
	   out_text += "<li role='listitem'>" + recipes[i] + "</li>";
	  }
	  out_text += "</ul>";
      document.getElementById("recipe_list").innerHTML = out_text;
  }
}

function SubmitClicked() {
  var rec_name = document.getElementById("rec_name").value;
  recipes.push(rec_name);
  showRecipes();
}

function AddRecipeClicked() {
  document.getElementById("add_recipe").style.visibility = "hidden";
  showForm();
  
  document.getElementById("submit").onclick = function(){SubmitClicked()};
}

function App() {
  showRecipes();
  document.getElementById("add_recipe").onclick = function(){AddRecipeClicked()};
    <div>
      <h1 className="doNotRemoveMe">Hello world.</h1>
      {/* ^ Do not remove this element ^ */}
    </div>
    return ("");
}

export default App;
