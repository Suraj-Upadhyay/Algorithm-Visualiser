# Hello, Contributors!

This is a ReactJS project built with `npx create-react-app` utility and follows certain UI and code design patterns, that need to be followed for a successful contribution to the project.

Contributions need to be meaningful and serve the purpose of the project as described in the [README](./README.md) file. For an idea on what is currently being worked on in the project and what is the plan on moving forward please refer to the [TODO](./TODO.md) file, which lists everyting that needs to be worked on in the project.

Or, you can just pickup any issues in the Issues Tab and start working on it until you solve the issue.


### UI Design

The UI Design of the project can be found [here](https://www.figma.com/files/project/198794682/Algorithm-Visualiser?fuid=1115370015659451986). Any UI design change ideas or suggestions should be first raised as an [**Issue**](https://github.com/Suraj-Upadhyay/Algorithm-Visualiser/issues) that contains an image or a design file embedded into the issue.

Following discussions regarding the design change, if a proposed design is finalised, the proposer is supposed to raise a PR that would implement the changes. The PR should be raised following the [Contribution Process](#contribution-process).

The demonstrations of how the project should behave is kept inside the [DEMONSTRATIONS](./DEMONSTRATIONS/) folder. For now, you can just view the sorting algorithm in action.

### Code Structure

This project follows a modular code structure and believes in loosely dependent components. Each component is supposed to do it's own job and be rendered.

The code structure is designed this way:

1. The WebPage is devided into 4 parts.

    i. The Header: Has the github link of the project and the project title.

    ii. The Control Panel: It has the controls to what and how something is going to be visualised, that is, the algorithm that is going to be visualised, the number of data points, and the delay between two consecutive steps. More options can be added in the future.

    iii. The Visualiser: The Visualiser will do the job of visualising the algorithms and for controlling the flow of the same, such as pausing, playing, stopping, taking one step forward into the algorithm and taking one step backwards. Many more Play Controls can be added in the future.

2. All the components must have separate folders, that contain an index.js (for barrel exports), component-name.js (for the JS logic) and component-name.css (for styling of the component). You can create such a component either manually or you can use this pre-written bash script, [createComponent.sh](/wecreateComponent.sh), to do the job for you.

3. Each component's CSS styling should not depend on its parent component's CSS styling. And the way this is achieved is by defining child component containers in parent component that will offer it the size and style that it should have. So that, the child components' HTML elements will have full width and full height of it's parent element.

4. For JavaScript files, use readable code. As JavaScript code can somtimes get really messy and hard to read and understand.

5. Commenting your code is always appreaciated and a plus point in maintaining the good will of everyone involved.

### Contribution Process

1. Pickup something to work on - Either something from [TODO](./TODO.md) or something from the Issues Tab or you can bring up your own new ideas and start working on them followed by discussions with other contributors.

2. Fork the project under your github and clone the source code with git. And run the project with a simple `npm start` in the project root directory.

3. Create a separate branch for your work and give it a worthy name.

4. Start coding!

5. Commit your work with descriptive commit messages for everyone to understand what has been done under it.

6. Push the changes to your *fork*. And create a merge request against the `master` branch of the original repository.

7. Wait for it to be reviewed. And be there for the discussions. Work on any improvements and comments on the PR.

8. Once everything looks good, your PR will be merged.

### Commit Guidelines

An ideal commit message should look like this:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Keep your commit messages as close to this as possible.

An ideal commit should solve a single problem or accomplish a single task.

An ideal commit doesn't make others think why is this piece of *code* here.
