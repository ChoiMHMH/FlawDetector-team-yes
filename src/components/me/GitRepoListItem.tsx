import Image from "next/image";
import bugImg from "../../../public/images/bug-white.svg";
import rightArrowImg from "../../../public/images/right-arrow-white.svg";
import { TUserInfoType } from "./GitRepoList";

const BG_COLOR: Record<TRepoType, string> = {
  pending: "bg-[#F1F1F1]",
  analyze: "bg-[#FFF3F3]",
  finish: "bg-[#F2EBFF]",
};

const TEXT_COLOR: Record<TRepoType, string> = {
  pending: "text-[#969696]",
  analyze: "text-[#FF6D6D]",
  finish: "text-[#6100FF]",
};

const TEXT = {
  pending: "검사전",
  analyze: "검사중",
  finish: "검사완료",
};

type TRepoType = "pending" | "analyze" | "finish";

export default function GitRepoListItem({ repo }: { repo: TUserInfoType }) {
  const repoType: TRepoType = "finish";

  return (
    <div className="flex h-[225px] w-[310px] flex-col justify-between rounded-3xl border border-solid border-[#E0CEFF] p-[20px]">
      <div className="flex h-[30px] flex-col justify-between gap-2">
        <div
          className={`${BG_COLOR[repoType]} ${repoType !== "finish" ? "w-[70px]" : "w-[75px]"} flex h-[35px] w-[75px] items-center justify-center gap-3 rounded-full px-2 py-3`}
        >
          <span
            className={`${TEXT_COLOR[repoType]} font-pretendard text-sm font-semibold`}
          >
            {TEXT[repoType]}
          </span>
        </div>
        <span className="w-[280px] break-words text-[24px]">{repo.name}</span>
      </div>
      <div className="flex items-end justify-between">
        <button
          className={`flex h-[45px] w-[146px] items-center justify-evenly rounded-xl bg-primary-500`}
        >
          <div className="flex gap-[6px]">
            <Image src={bugImg} alt="Bug" width={18} height={18} />
            <span className="font-pretendard text-[18px] text-white">
              검사하기
            </span>
          </div>
          <Image src={rightArrowImg} alt="Bug" width={9} height={9} />
        </button>
        <span className="text-[16px] font-light text-[#969696]">
          {repo.createdAt.slice(0, 10)}
        </span>
      </div>
    </div>
  );
}
