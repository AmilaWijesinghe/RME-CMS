export const designvalidationSchema = {
    restaurantName: {
        isLength: {
          options: {
            min: 1,
            max: 35,
          },
          errorMessage:
            "restaurantName must be at least 5 characters with a max of 35 characters",
        },
        notEmpty: {
          errorMessage: "restaurantName cannot be empty",
        },
        isString: {
          errorMessage: "restaurantName must be a string!",
        },
      }
}