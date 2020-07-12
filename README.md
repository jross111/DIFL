## View

There are a few predesigned styles for the filters UI that might be appropriate: dropdown, modern, buttons, inline buttons, and round buttons. These could be tweaked with custom css if needed.

dropdown
![dropdown](./img/dropdown.png)

modern
![modern](./img/modern.png)

buttons
![buttons](./img/buttons.png)

buttons inline
![buttons inline](./img/buttons-inline.png)

buttons round
![buttons round](./img/buttons-round.png)

## Layout

The UI could easily be moved to the left side of the screen for tablet/desktops, but it would create empty space below it.

## Mobile

The default is a "Filter" button on the landing page which brings up a mostly full screen UI for the filters.

## Structure

So far this is the model I came up with while figuring things out: Each buisness should have one or more categories, one or more location tags and one state tag.

As long as we have 3 or more things to filter (Buisness Type, Location and State for now) tag or category not included in the filter script won't appear in the filter. If there were only two it would work automatically when you added a new tag or category in the squarespace wysiwyg editor.

### Categories

- Arts and Entertainment
- Fitness
- Food
- Health
- Pet Friendly

### Tags

#### Locations

- Brooklyn
- Manhattan
- Queens
- Bronx
- Staten Island
- Williamsburg
- SoHo
- Upper West Side
- Upper East Side
- Harlem
- West Village
- Lower East Side

#### States

- New York
- New Jersey
- Connecticut
- Pennsylvania
