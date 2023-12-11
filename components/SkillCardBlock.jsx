import React from "react";
import {
  ReactOriginal,
  NextjsOriginal,
  TailwindcssPlain,
  JavascriptOriginal,
  MaterialuiOriginal,
  NodejsOriginal,
  ExpressOriginal,
  MysqlOriginal,
  MongodbOriginal,
  JavaOriginal,
  KotlinOriginal,
  COriginal,
  PythonOriginal,
  PhpOriginal,
  GithubOriginal,
  GitOriginal,
  FigmaOriginal,
  TypescriptOriginal,
} from "devicons-react";

function SkillCardBlock({ icon, name }) {
  let IconComponent = null;
  switch (icon) {
    case "ReactOriginal":
      IconComponent = ReactOriginal;
      break;
    case "NextjsOriginal":
      IconComponent = NextjsOriginal;
      break;
    case "TailwindcssPlain":
      IconComponent = TailwindcssPlain;
      break;

    case "MaterialuiOriginal":
      IconComponent = MaterialuiOriginal;
      break;

    case "GithubOriginal":
      IconComponent = GithubOriginal;
      break;
      break;
    case "GitOriginal":
      IconComponent = GitOriginal;
      break;
    case "FigmaOriginal":
      IconComponent = FigmaOriginal;
      break;
    case "TypescriptOriginal":
      IconComponent = TypescriptOriginal;
      break;
    default:
      break;
  }

  return (
    <div className="flex flex-row justify-evenly items-center gap-4 p-4 rounded-[5px] bg-[#350078]">
      {IconComponent && (
        <div>
          <IconComponent className="scale-[150%]" />
        </div>
      )}
      <div>{name}</div>
    </div>
  );
}

export default SkillCardBlock;
