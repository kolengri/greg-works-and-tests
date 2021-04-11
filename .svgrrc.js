module.exports = {
  icon: true,
  ext: "tsx",
  native: false,
  svgoConfig: {
    plugins: [
      {
        removeDimensions: true,
      },
    ],
  },
  replaceAttrValues: {
    "#000": "{props.color || 'currentColor'}",
    "#000000": "{props.color || 'currentColor'}",
    "#a12d2d": "{props.color || 'currentColor'}",
    "#221b38": "{props.color || 'currentColor'}",
    currentColor: "{props.color || 'currentColor'}",
  },
  template({ template }, opts, { imports, componentName, props, jsx }) {
    const typeScriptTpl = template.smart({ plugins: ["typescript"] })
    componentName.name = componentName.name.replace("Svg", "")
    const name = componentName
    return typeScriptTpl.ast`

    ${imports}

    export const ${name} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};

    export default ${name};
  `
  },
}
