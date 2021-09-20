import {Ability, AbilityBuilder} from '@casl/ability';


export default function defineRulesFor(user) {
  const {can, rules} = new AbilityBuilder(Ability);

  switch(user?.name) {
    case 'admin':
      can('manage', 'all');
      break;
    case 'manager':
      can('show', 'Manager');
      can('show', 'Staff');
      break;
    case 'staff':
      can('show', 'Staff');
      break;
    default:
  }

  return rules;
}

export function buildAbilityFor(user) {
  return new Ability(defineRulesFor(user));
  // 公式サンプルと異なり、今回は subject type detection を行わないので、オプションなしでインスタンス生成
//   return new Ability(defineRulesFor(role), {
//     // https://casl.js.org/v5/en/guide/subject-type-detection
//     detectSubjectType: (object) => object.constructor
// });
}
