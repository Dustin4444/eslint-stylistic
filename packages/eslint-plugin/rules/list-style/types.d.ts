/* GENERATED, DO NOT EDIT DIRECTLY */

/* @checksum: aPUyl_hHy9tKpYY0CXQItQCWKTMQnkS395GsyYTMsws */

export type OverrideConfig = BaseConfig | 'off'

export interface ListStyleSchema0 {
  empty?: 'ignore' | 'always' | 'never'
  singleLine?: SingleLineConfig
  multiLine?: MultiLineConfig
  overrides?: {
    '()'?: OverrideConfig
    '[]'?: OverrideConfig
    '{}'?: OverrideConfig
    '<>'?: OverrideConfig
    'ArrayExpression'?: OverrideConfig
    'ArrayPattern'?: OverrideConfig
    'ArrowFunctionExpression'?: OverrideConfig
    'CallExpression'?: OverrideConfig
    'ExportNamedDeclaration'?: OverrideConfig
    'FunctionDeclaration'?: OverrideConfig
    'FunctionExpression'?: OverrideConfig
    'IfStatement'?: OverrideConfig
    'ImportAttributes'?: OverrideConfig
    'ImportDeclaration'?: OverrideConfig
    'JSONArrayExpression'?: OverrideConfig
    'JSONObjectExpression'?: OverrideConfig
    'NewExpression'?: OverrideConfig
    'ObjectExpression'?: OverrideConfig
    'ObjectPattern'?: OverrideConfig
    'TSDeclareFunction'?: OverrideConfig
    'TSEnumBody'?: OverrideConfig
    'TSFunctionType'?: OverrideConfig
    'TSInterfaceBody'?: OverrideConfig
    'TSTupleType'?: OverrideConfig
    'TSTypeLiteral'?: OverrideConfig
    'TSTypeParameterDeclaration'?: OverrideConfig
    'TSTypeParameterInstantiation'?: OverrideConfig
  }
}
export interface SingleLineConfig {
  spacing?: 'always' | 'never'
  maxItems?: number
}
export interface MultiLineConfig {
  minItems?: number
}
export interface BaseConfig {
  empty?: 'ignore' | 'always' | 'never'
  singleLine?: SingleLineConfig
  multiLine?: MultiLineConfig
}

export type ListStyleRuleOptions = [ListStyleSchema0?]

export type RuleOptions = ListStyleRuleOptions
export type MessageIds =
  | 'shouldSpacing'
  | 'shouldNotSpacing'
  | 'shouldWrap'
  | 'shouldNotWrap'
