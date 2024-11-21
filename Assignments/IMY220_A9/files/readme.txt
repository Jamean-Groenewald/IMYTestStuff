//u23524121 Jamean Groenewald

1. .babelrc: this file is empty so I added the required presets. This fixes the error because without the presets Babel cannot transpile.

2. server.js: There is a typo by the line const app = expresso(); so I changed it to be express(). This fixes the error because expresso() is undefined but express() is the correct keyword to use.

3. RecipePage.js: The class is not exported so I added the export default keyword. This fixes a problem because without exporting the class, you cannot import and use it in another class.

4. RecipePage.js: The return is not inside the render method so I moved return to be inside render(). This fixes the error because the render() method is supposed to return the JSX that needs to be rendered, so having return outside the render method means the component cannot output anything.

5. RecipePage.js: There is no import for React so I added the import. This fixes the issue because React needs to be imported to interpret JSX syntax in class components, so not importing React means that this JSX cannot be compiled.

6. index.js: App is not being rendered so I added <App /> in the root.render(). This fixes the error because without rendering App in the root element, the main component of the application is not displayed on the page.

7. App.js: App is not being exported, so I added the export default keyword. This fixes a problem because without exporting the class, you cannot import and use it in another class.

8. server.js: app.get(express.static('public')); should be app.use(express.static('public')); This fixes the error because this middleware allows Express to serve static files from the directory.

9. server.js: there is no path import, so I added it. This fixes the issue because the path module is necessary to construct the file path correctly when sending the main HTML file which makes sure that the application can find and serve the correct file.

10. server.js: There is no root to serve the main HTML file, so I added a route for the root URL (/). This fixes the problem because without this, you cannot make requests to the base URL without getting the 'Cannot GET /' error which prevents the application from rendering the main page.

11. server.js: The recipes route does not send the parsed JSON data back, so I added res.json(JSON.parse(data));. This fixes the problem because it ensures that the client receives the recipe data in a usable format which makes it possible to display the recipes correctly.

12. App.js: RecipePage is not being imported in this class, so I added the import for it. This fixes an error where RecipePage is undefined, which now allows for the component to render correctly.

13. App.js: this.props should be this.state in the constructor. This fixes the issue because this.state is what you should use to store component specific data.

14. App.js: recipes: "[]" should be recipes: [] (without the quotes). This fixes a problem where recipes was initialised as a string when it is actually supposed to be an array, so when .map() was called on it it threw an error because .map expects an array.

15. App.js: componentDidUpdate() should be componentDidMount(). This fixes an error because componentDidMount() is the correct lifecycle method for fetching data when the component first loads.

16. server.js: The path for recipes.json is incorrect, 'recipes.json' should be 'public/recipes.json'. This fixes an error because the server could not find the recipes.json file because it was looking in the wrong file directory.

17. RecipeCard: onClick={onClick} should be onClick={this.onClick}. This fixes the problem because now it correctly binds the onClick handler to the component's onClick method.

18. RecipeCard: in the onClick method, props.id should be this.props.id. This fixes the problem because now the component correctly accessess the id prop from the instance's properties.

19. App.js: the ingredients prop is missing, so I added it: ingredients={this.state.currentRecipe.ingredients}. This fixes the problem because RecipePage is expecting an ingredients prop and this was not provided initially.

20. App.js: in the setCurrentRecipe method, 'recipe.id = id' should be 'recipe.id === id'. This fixes a problem because '=' assigns the value, so all the recipes had the same id's which caused a problem with displaying the different recipes. '===' is used for equality, so this now ensures that the correct recipe is selected based on the ID.