function createForm() {
  // Create a new Google Form
  var form = FormApp.create('Demo Form');
  // Add form items
  var nameItem = form.addTextItem().setTitle('Name');
  var numberItem = form.addMultipleChoiceItem()
    .setTitle('Choose one number')
    .setChoiceValues(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
  // Install a trigger to update choices on form submit
  installTrigger(form.getId());
 }

function installTrigger(formId) {
  // Create a trigger to run on form submit
  ScriptApp.newTrigger('updateFormChoices')
    .forForm(formId)
    .onFormSubmit()
    .create();
 }

function updateFormChoices(e) {
  // Get the submitted response
  var response = e.response.getItemResponses();

  // Assuming the order of form items is Name, Choose one number from 1 to 10
  var selectedNumber = response[1].getResponse();

  // Open the form by ID
  var form = FormApp.openById(e.source.getId());

  // Update choices based on the selected number
  var numberItem = form.getItems(FormApp.ItemType.MULTIPLE_CHOICE)[0].asMultipleChoiceItem();
  var choices = numberItem.getChoices();

  // Remove the selected number from choices
  var updatedChoices = choices.filter(function(choice) {
    return choice.getValue() !== selectedNumber;
  });

  // Find the last option and add the next one
  var lastOption = choices[choices.length - 1];
  var nextOptionValue = String(parseInt(lastOption.getValue(), 10) + 1);
  updatedChoices.push(numberItem.createChoice(nextOptionValue));

  // Set the updated choices to the form item
  numberItem.setChoiceValues(updatedChoices.map(function(choice) {
    return choice.getValue();
  }));
}
