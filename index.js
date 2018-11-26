var recipes = { flour: 1 }

function updateObjectWithKeyAndValue(object, key, value) {
  var newRecipe = Object.assign({}, object, { [key]: value });
  return newRecipe;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}