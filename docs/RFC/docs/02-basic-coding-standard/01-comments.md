# Comments

__RFC NUM__: 02-01

## Summary

The BubblePod comment standard.

## Content

All code must be documented. The default language is English.

Use the standard [JSDoc](https://jsdoc.app/) syntax.

Template:

```javascript
/**
 * What function do.
 *
 * @author %name% %surname> <%email%>
 * @throws {%ExceptionType%} When append this exception.
 * @param %paramName% What is this parameter.
 * @returns What the function returns.
 */
async function findOne(id: string): Promise<UserDocument> {
  // ...
  throw new NotFoundException("...");
  // ...
}
```

Example:

```javascript
/**
 * Find and return the User with a specific id.
 *
 * @author Calogero Cantone <calogero.cantone.work@gmail.com>
 * @throws {NotFoundException} If not exist a user with the specified id.
 * @param id The id of the User to retrieve.
 * @returns The User with the specified id.
 */
async function findOne(id: string): Promise<UserDocument> {
  // ...
  throw new NotFoundException("...");
  // ...
}
```

__Tip__:
In case of functions/methods, you can use the vscode autocompletion simply writing `/**` and `ENTER`.

## Authors

1.
    - Full Name: Calogero Cantone
    - Email: calogero.cantone.work@gmail.com
    - Role: CIO
