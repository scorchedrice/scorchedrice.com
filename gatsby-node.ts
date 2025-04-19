import * as path from "path"

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
        "@/widgets": path.resolve(__dirname, "src/widgets"),
        "@/features": path.resolve(__dirname, "src/features"),
        "@/shared": path.resolve(__dirname, "src/shared"),
      },
    },
  })
}
