import React, { useState, useEffect, useRef } from "react"; // 수정: Hooks를 직접 가져옴

// ==========================================
// 0. 유틸리티: 아이콘 (라이브러리 없이 직접 정의 - SVG)
// ==========================================
const IconBase = ({ children, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {children}
  </svg>
);

const CalculatorIcon = (props) => (
  <IconBase {...props}>
    <rect width="16" height="20" x="4" y="2" rx="2" />
    <line x1="8" x2="16" y1="6" y2="6" />
    <line x1="16" x2="16" y1="14" y2="18" />
    <path d="M16 10h.01" />
    <path d="M12 10h.01" />
    <path d="M8 10h.01" />
    <path d="M12 14h.01" />
    <path d="M8 14h.01" />
    <path d="M12 18h.01" />
    <path d="M8 18h.01" />
  </IconBase>
);
const SproutIcon = (props) => (
  <IconBase {...props}>
    <path d="M7 20h10" />
    <path d="M10 20c5.5-2.5.8-6.4 3-10" />
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
  </IconBase>
);
const AlertCircleIcon = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </IconBase>
);
const RefreshCwIcon = (props) => (
  <IconBase {...props}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </IconBase>
);
const CalendarIcon = (props) => (
  <IconBase {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </IconBase>
);
const DownloadIcon = (props) => (
  <IconBase {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </IconBase>
);
const CopyIcon = (props) => (
  <IconBase {...props}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </IconBase>
);
const ArrowLeftIcon = (props) => (
  <IconBase {...props}>
    <line x1="19" x2="5" y1="12" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </IconBase>
);
const ArrowRightIcon = (props) => (
  <IconBase {...props}>
    <line x1="5" x2="19" y1="12" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </IconBase>
);
const TreesIcon = (props) => (
  <IconBase {...props}>
    <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 5.3-2.1" />
    <path d="M7 16v6" />
    <path d="M13 19v3" />
    <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .9-1.7l-3.5-5a.5.5 0 0 0-.8 0l-3.5 5a1 1 0 0 0 .9 1.7h.2l-2 3.3a1 1 0 0 0 .7 1.7h.3l-2 3.3a1 1 0 0 0 .7 1.7H12z" />
  </IconBase>
);
const CircleDotIcon = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="1" />
  </IconBase>
);
const LeafIcon = (props) => (
  <IconBase {...props}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 13-1.8 17.8 0 0-1.7 1.6-6.2.2" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </IconBase>
);
const HomeIcon = (props) => (
  <IconBase {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </IconBase>
);
const ChevronDownIcon = (props) => (
  <IconBase {...props}>
    <path d="m6 9 6 6 6-6" />
  </IconBase>
);
const ChevronUpIcon = (props) => (
  <IconBase {...props}>
    <path d="m18 15-6-6-6 6" />
  </IconBase>
);

// ==========================================
// 1. 유틸리티: 토스트 알림
// ==========================================
const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg z-50 text-sm font-medium transition-opacity duration-300">
      {message}
    </div>
  );
};

// ==========================================
// 2. 유틸리티: 입력 필드
// ==========================================
const InputField = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  readOnly = false,
  disabled = false,
  highlight = false,
  badge = null,
  maxLength = null,
  id,
  onKeyDown,
  className,
  inputMode = "text",
  size = "default", // New prop for size
}) => {
  // Determine classes based on size
  const isCompact = size === "compact";
  // *** Compact 재정의 (가독성 향상) ***
  const labelSizeClass = isCompact ? "text-[11px]" : "text-sm";
  const inputSizeClass = isCompact ? "p-1.5 text-xs h-7" : "p-3 text-base h-10"; // H-7로 높이 확보
  const badgeSizeClass = isCompact
    ? "text-[9px] px-1 py-0"
    : "text-[11px] px-2 py-0.5";

  return (
    <div
      className={`flex flex-col gap-0.5 ${
        disabled ? "opacity-50" : ""
      } ${className}`}
    >
      {label && (
        <label
          className={`${labelSizeClass} font-bold flex justify-between items-center whitespace-nowrap ${
            disabled ? "text-gray-400" : "text-gray-800"
          }`}
        >
          {label}
          {badge && (
            <span
              className={`${badgeSizeClass} rounded bg-blue-100 text-blue-800 font-bold ml-2 truncate max-w-[150px]`}
            >
              {badge}
            </span>
          )}
        </label>
      )}
      <input
        id={id}
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onKeyDown={onKeyDown}
        readOnly={readOnly}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeholder}
        onWheel={(e) => e.target.blur()}
        className={`
          w-full border rounded-lg transition-all outline-none text-right
          ${inputSizeClass}
          ${
            disabled
              ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
              : readOnly
              ? "bg-gray-50 text-gray-700 cursor-not-allowed font-medium border-gray-200"
              : "bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 border-gray-400"
          }
          ${
            highlight && !disabled
              ? "font-bold text-blue-900 border-blue-300 bg-blue-50"
              : ""
          }
        `}
      />
    </div>
  );
};

// ==========================================
// 3. 공통 유틸리티 함수
// ==========================================
const floatOrZero = (str) => {
  const parsed = parseFloat(str);
  return isNaN(parsed) ? 0 : parsed;
};

// 소수점 버림 함수 (n자리까지 유지)
const floorTo = (num, decimals) => {
  const factor = Math.pow(10, decimals);
  return Math.floor(num * factor) / factor;
};

// 천단위 콤마 포맷팅 함수
const formatComma = (val) => {
  if (val === "" || val === null || val === undefined) return "";
  const num = Number(val);
  if (isNaN(num)) return val;
  return num.toLocaleString();
};

// ==========================================
// 4. 벼 피해율 계산기 (RiceCalculatorScreen)
// ==========================================

const initialRiceFarmState = {
  farmName: "",
  farmId: "",
  insureArea: "", // 2. 가입면적
  witheredArea: "", // 3. 고사
  uncompArea: "", // 4. 미보상
  preHarvestArea: "", // 5. 기수확
  surveyTargetArea: "", // 6. 실제경작면적 (자동)
  stdYield: "",
  actualYield: "",
  uncompReduc: "0",
  moisture: "",
  riceType: "me",
  stdMoisture: "15",
  uncompRatio: "",
  sampleValues: Array(8).fill(""),
  sampleLength: "",
  sampleWidth: "0.3",
  result: null,
  error: "",
  showDetails: false,
};

// 벼 표본 구간 수 계산 로직
const getRiceSampleCount = (targetAreaStr, insureAreaStr) => {
  const target = parseFloat(targetAreaStr) || parseFloat(insureAreaStr) || 0;
  if (target >= 10000) return 8;
  if (target >= 7500) return 7;
  if (target >= 5000) return 6;
  if (target >= 2500) return 5;
  return 4;
};

const getRiceSampleSum = (values, count) => {
  let sum = 0;
  for (let i = 0; i < count; i++) {
    sum += floatOrZero(values[i]);
  }
  return sum;
};

const RiceCalculatorScreen = ({ onBack, showToast }) => {
  const [farms, setFarms] = useState(
    Array.from({ length: 17 }, () => ({ ...initialRiceFarmState }))
  );
  const [surveyDate, setSurveyDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const isFarmActive = (farmId) => {
    return farmId && farmId.length === 4 && /^\d{4}$/.test(farmId);
  };

  const toggleDetails = (index) => {
    setFarms((prev) => {
      const newFarms = [...prev];
      newFarms[index] = {
        ...newFarms[index],
        showDetails: !newFarms[index].showDetails,
      };
      return newFarms;
    });
  };

  const renderCalculationDetails = (farm) => {
    if (!farm.showDetails) return null;

    const activeCount = getRiceSampleCount(
      farm.surveyTargetArea,
      farm.insureArea
    );
    const sampleSum = getRiceSampleSum(farm.sampleValues, activeCount);
    const length = floatOrZero(farm.sampleLength);
    const width = floatOrZero(farm.sampleWidth);
    const totalSampleArea = length * width * activeCount;

    const moisture = floatOrZero(farm.moisture);
    const stdMoisture = floatOrZero(farm.stdMoisture);

    const targetArea = floatOrZero(farm.surveyTargetArea);

    let unitYield = 0;
    if (totalSampleArea > 0) {
      const numerator =
        (sampleSum * 0.93 * (1 - moisture / 100)) / (1 - stdMoisture / 100);
      unitYield = numerator / totalSampleArea;
    }
    const unitYieldFinal = floorTo(unitYield, 2);
    const surveyYield = floorTo((unitYieldFinal * targetArea) / 1000, 2);

    const stdYield = floatOrZero(farm.stdYield);
    const insureArea = floatOrZero(farm.insureArea);
    const otherArea =
      floatOrZero(farm.uncompArea) + floatOrZero(farm.preHarvestArea);
    const otherYield =
      insureArea > 0 ? floorTo((stdYield / insureArea) * otherArea, 2) : 0;

    const actualYield = floatOrZero(farm.actualYield);
    const uncompReduc = floatOrZero(farm.uncompReduc);
    const uncompRatio = floatOrZero(farm.uncompRatio);

    const isHighDamage = farm.result?.damageRate > 20;
    const damageColorClass = isHighDamage ? "text-red-600" : "text-gray-900";

    return (
      <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600 bg-gray-50 p-3 rounded-lg space-y-3">
        <p className="font-bold text-sm text-gray-800 flex items-center gap-1">
          <CalculatorIcon className="w-3 h-3" /> 상세 계산 과정 (절사 적용)
        </p>

        <div className="space-y-1">
          <p className="font-semibold text-gray-700">
            1. 표본구간 단위수확량 (g/m²)
          </p>
          <div className="pl-2 border-l-2 border-gray-300">
            <p>
              ① 표본중량합:{" "}
              <span className="font-mono text-blue-600">
                {sampleSum.toFixed(0)}g
              </span>
            </p>
            <p>
              ② 표본면적합:{" "}
              <span className="font-mono text-blue-600">
                {length}m × {width}m × {activeCount} ={" "}
                {totalSampleArea.toFixed(2)}m²
              </span>
            </p>
            <div className="mt-1 bg-white p-2 rounded font-mono text-[10px] break-all border border-gray-200">
              <div className="mb-1 text-gray-500 font-bold">
                [계산식] (벼: 0.93 계수 적용)
              </div>
              <span className="text-gray-700">
                {"{"} {sampleSum} × 0.93 × (1-{moisture / 100}) ÷ (1-
                {stdMoisture / 100}) {"}"} ÷ {totalSampleArea.toFixed(2)}
              </span>
              <br />={" "}
              <span className="font-bold text-blue-700">
                {unitYieldFinal.toFixed(2)} g/m²
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <p className="font-semibold text-gray-700">2. 전체 수확량 (kg)</p>
          <div className="pl-2 border-l-2 border-gray-300">
            <p>
              ① 실제경작 수확:{" "}
              <span className="font-mono">
                {unitYieldFinal.toFixed(2)} × {targetArea} ÷ 1000 ={" "}
                {surveyYield.toFixed(2)}kg
              </span>
            </p>
            <p className="text-[10px] text-gray-400 mb-1">
              (6.실제경작면적: {targetArea}m² 적용)
            </p>
            <p>
              ② 타작물등 수확:{" "}
              <span className="font-mono">
                {stdYield} ÷ {insureArea} × {otherArea} ={" "}
                {otherYield.toFixed(2)}kg
              </span>
            </p>
            <p className="text-[10px] text-gray-400 mb-1">
              (평년 ÷ 가입면적 × (미보상+기수확))
            </p>
            <p className="mt-1 font-bold text-gray-800">
              합계 (소수점 2자리 버림): Floor({surveyYield.toFixed(4)} +{" "}
              {otherYield.toFixed(4)}) ={" "}
              <span className="text-lg">{actualYield} kg</span>
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="font-semibold text-gray-700">3. 미보상 감수량 (kg)</p>
          <p className="pl-2 font-mono">
            Floor(({stdYield} - {actualYield}) × {uncompRatio}%) ={" "}
            <span className="font-bold text-red-600">{uncompReduc} kg</span>
          </p>
        </div>

        <div className="space-y-1 bg-white p-2 rounded border border-gray-200">
          <p className="font-semibold text-gray-800">4. 최종 피해율 (%)</p>
          <p className="font-mono text-xs mb-1 text-gray-500">
            (평년 - 수확 - 미보상) ÷ 평년
          </p>
          <p className="font-mono text-sm font-bold text-gray-700">
            ({stdYield} - {actualYield} - {uncompReduc}) ÷ {stdYield}
          </p>
          <p
            className={`text-right text-lg font-extrabold ${damageColorClass}`}
          >
            = {farm.result?.damageRate.toFixed(2)} %{" "}
            <span className="text-xs font-normal text-gray-400">
              (소수점 3자리 버림)
            </span>
          </p>
        </div>
      </div>
    );
  };

  const handleKeyDown = (e, farmIdx, fieldName) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const currentFarm = farms[farmIdx];
      const activeCount = getRiceSampleCount(
        currentFarm.surveyTargetArea,
        currentFarm.insureArea
      );
      let fields = [
        "farmId",
        "insureArea",
        "witheredArea",
        "uncompArea",
        "preHarvestArea",
        "stdYield",
        "sampleLength",
        "sampleWidth",
      ];
      for (let i = 0; i < activeCount; i++) fields.push(`sample${i}`);
      fields.push("moisture");
      fields.push("uncompRatio");

      const currIdx = fields.indexOf(fieldName);
      if (currIdx !== -1 && currIdx < fields.length - 1) {
        const nextId = `f${farmIdx}_${fields[currIdx + 1]}`;
        const nextElement = document.getElementById(nextId);
        if (nextElement && !nextElement.disabled) {
          nextElement.focus();
          nextElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else if (currIdx === fields.length - 1) {
        if (farmIdx < farms.length - 1) {
          const nextFarmId = `f${farmIdx + 1}_farmId`;
          const nextFarmElement = document.getElementById(nextFarmId);
          if (nextFarmElement) {
            nextFarmElement.focus();
            nextFarmElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
          }
        }
      }
    }
  };

  const updateFarmData = (index, field, value) => {
    setFarms((prevFarms) => {
      const newFarms = [...prevFarms];
      if (field === "farmId") {
        value = value.replace(/[^0-9]/g, "").slice(0, 4);
      }

      const currentFarm = { ...newFarms[index], [field]: value };

      if (
        ["insureArea", "witheredArea", "uncompArea", "preHarvestArea"].includes(
          field
        )
      ) {
        const insure = parseFloat(currentFarm.insureArea) || 0;
        const withered = parseFloat(currentFarm.witheredArea) || 0;
        const uncomp = parseFloat(currentFarm.uncompArea) || 0;
        const preHarvest = parseFloat(currentFarm.preHarvestArea) || 0;
        const calcTarget = insure - withered - uncomp - preHarvest;
        if (currentFarm.insureArea && calcTarget >= 0) {
          currentFarm.surveyTargetArea = calcTarget.toString();
        } else {
          currentFarm.surveyTargetArea = "0";
        }
      }

      if (field === "riceType")
        currentFarm.stdMoisture = value === "me" ? "15" : "13";

      const activeCount = getRiceSampleCount(
        currentFarm.surveyTargetArea,
        currentFarm.insureArea
      );
      const length = floatOrZero(currentFarm.sampleLength);
      const width = floatOrZero(currentFarm.sampleWidth);
      const targetArea = floatOrZero(currentFarm.surveyTargetArea);
      const moistureVal = floatOrZero(currentFarm.moisture);
      const stdMoistureVal = floatOrZero(currentFarm.stdMoisture);
      const insureAreaVal = floatOrZero(currentFarm.insureArea);
      const stdYieldVal = floatOrZero(currentFarm.stdYield);
      const uncompAreaVal = floatOrZero(currentFarm.uncompArea);
      const preHarvestAreaVal = floatOrZero(currentFarm.preHarvestArea);

      let sumSamples = 0;
      for (let i = 0; i < activeCount; i++) {
        sumSamples += floatOrZero(currentFarm.sampleValues[i]);
      }

      const totalSampleArea = length * width * activeCount;

      if (totalSampleArea > 0 && targetArea > 0 && insureAreaVal > 0) {
        const numerator =
          (sumSamples * 0.93 * (1 - moistureVal / 100)) /
          (1 - stdMoistureVal / 100);
        const unitYield_g = floorTo(numerator / totalSampleArea, 2);
        const surveyYield_kg = floorTo((unitYield_g * targetArea) / 1000, 2);
        const otherAreaYield_kg = floorTo(
          (stdYieldVal / insureAreaVal) * (uncompAreaVal + preHarvestAreaVal),
          2
        );
        const totalYield = surveyYield_kg + otherAreaYield_kg;

        currentFarm.actualYield = floorTo(totalYield, 2).toFixed(2);
      } else if (sumSamples === 0) {
        if (field === "sampleValues" && sumSamples === 0)
          currentFarm.actualYield = "0";
      }

      const actual = floatOrZero(currentFarm.actualYield);
      const ratio = floatOrZero(currentFarm.uncompRatio);
      const diff = stdYieldVal - actual;
      if (diff > 0 && currentFarm.uncompRatio !== "") {
        currentFarm.uncompReduc = floorTo(diff * (ratio / 100), 2).toFixed(2);
      } else {
        currentFarm.uncompReduc = "0";
      }

      const uncompReducVal = floatOrZero(currentFarm.uncompReduc);
      const numerator = stdYieldVal - actual - uncompReducVal;
      let damageRate = 0;
      if (stdYieldVal > 0) {
        damageRate = numerator / stdYieldVal;
      }
      damageRate = Math.max(0.0, damageRate);

      currentFarm.result = {
        recognizedYield: actual + uncompReducVal,
        reductionAmount: numerator,
        damageRate: floorTo(damageRate * 100, 2),
        activeSampleCount: activeCount,
      };

      let hasError = false;
      for (let i = 0; i < activeCount; i++) {
        if (
          currentFarm.sampleValues[i] !== "" &&
          isNaN(parseFloat(currentFarm.sampleValues[i]))
        ) {
          currentFarm.error = `${i + 1}번 표본 값이 올바르지 않습니다.`;
          hasError = true;
          break;
        }
      }
      if (!hasError) currentFarm.error = "";

      newFarms[index] = currentFarm;
      return newFarms;
    });
  };

  const handleSampleValueChange = (index, sampleIdx, val) => {
    const newSamples = [...farms[index].sampleValues];
    newSamples[sampleIdx] = val;
    updateFarmData(index, "sampleValues", newSamples);
  };

  const handleReset = (index) => {
    if (window.confirm(`${index + 1}번 농지 데이터를 초기화하시겠습니까?`)) {
      setFarms((prev) => {
        const next = [...prev];
        next[index] = { ...initialRiceFarmState };
        return next;
      });
    }
  };

  const handleGlobalReset = () => {
    if (window.confirm("모든 17개 농지의 데이터를 삭제하시겠습니까?")) {
      setFarms(Array.from({ length: 17 }, () => ({ ...initialRiceFarmState })));
    }
  };

  const handleSaveToCSV = () => {
    // 필터링: 입력된 데이터가 있는 농지만 선택
    const activeFarms = farms.filter(
      (f) => f.farmId || f.insureArea || f.result
    );

    // 헤더: 미보상감수량, 인정수확량 삭제
    const headers = [
      "순번",
      "농지번호",
      "가입면적",
      "고사면적",
      "미보상면적",
      "기수확면적",
      "실제경작면적",
      "평년수확량",
      "표본구간수",
      "길이",
      "폭",
      "표본중량합계(g)",
      "표본면적합계(m²)",
      "함수율",
      "기준함수율",
      "미보상비율",
      "조사수확량",
      "감수량",
      "최종피해율(%)",
    ];

    const rows = activeFarms.map((farm, idx) => {
      const r = farm.result || {};
      const riceTypeName = farm.riceType === "me" ? "메벼(15%)" : "찰벼(13%)";
      const activeCount = getRiceSampleCount(
        farm.surveyTargetArea,
        farm.insureArea
      );
      const sampleSum = getRiceSampleSum(farm.sampleValues, activeCount);

      const length = floatOrZero(farm.sampleLength);
      const width = floatOrZero(farm.sampleWidth);
      const totalSampleArea = (length * width * activeCount).toFixed(2);

      return [
        idx + 1,
        farm.farmId,
        formatComma(farm.insureArea),
        formatComma(farm.witheredArea),
        formatComma(farm.uncompArea),
        formatComma(farm.preHarvestArea),
        formatComma(farm.surveyTargetArea),
        formatComma(farm.stdYield),
        activeCount,
        farm.sampleLength,
        farm.sampleWidth,
        formatComma(sampleSum),
        totalSampleArea,
        farm.moisture,
        riceTypeName,
        farm.uncompRatio,
        formatComma(farm.actualYield),
        r.reductionAmount ? formatComma(r.reductionAmount.toFixed(2)) : "",
        r.damageRate ? r.damageRate.toFixed(2) : "",
      ]
        .map((val) => `"${val}"`)
        .join(",");
    });

    if (rows.length === 0) {
      showToast("저장할 데이터가 없습니다.");
      return;
    }

    const csvContent = "\uFEFF" + [headers.join(","), ...rows].join("\n");
    try {
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `벼피해율조사_${surveyDate}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast("CSV 파일 다운로드가 시작되었습니다.");
    } catch (e) {
      showToast("다운로드 실패: 브라우저 보안 설정을 확인하세요.");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 font-sans overflow-hidden">
      <div className="bg-white border-b z-20 shadow-sm flex-none">
        <div className="p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <button
                onClick={onBack}
                className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-700"
              >
                <ArrowLeftIcon className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2 text-blue-700">
                <SproutIcon className="w-6 h-6" />
                <h1 className="text-lg font-bold">1. 벼 (17개 농지)</h1>
              </div>
            </div>
            <button
              onClick={handleGlobalReset}
              className="text-xs text-gray-500 hover:text-red-500 border border-gray-300 px-3 py-1 rounded bg-gray-50 hover:bg-red-50"
            >
              전체 초기화
            </button>
          </div>
          <div className="flex gap-2 items-stretch">
            <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-lg border border-blue-100 flex-1">
              <CalendarIcon className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-sm font-bold text-blue-800 whitespace-nowrap">
                일자:
              </span>
              <input
                type="date"
                value={surveyDate}
                onChange={(e) => setSurveyDate(e.target.value)}
                className="bg-white border border-blue-200 rounded px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 font-medium w-full min-w-0"
              />
            </div>
            <button
              onClick={handleSaveToCSV}
              className="flex-none flex items-center justify-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-sm active:scale-95 transition-all text-sm font-bold whitespace-nowrap"
            >
              <DownloadIcon className="w-4 h-4" /> <span>저장</span>
            </button>
            <button
              onClick={() => {
                let textContent = `[벼 피해율 조사 - ${surveyDate}]\n\n`;
                const activeFarms = farms.filter(
                  (f) => f.farmId || f.insureArea || f.result
                );
                if (activeFarms.length === 0) {
                  showToast("입력된 농지 데이터가 없습니다.");
                  return;
                }
                activeFarms.forEach((farm, idx) => {
                  const r = farm.result || {};
                  const rice = farm.riceType === "me" ? "메벼" : "찰벼";
                  textContent += `■ 농지 ${idx + 1} (${
                    farm.farmId || "번호없음"
                  })\n`;
                  textContent += `- 면적: 가입 ${farm.insureArea}, 실제경작 ${farm.surveyTargetArea}\n`;
                  textContent += `- 수확량: 평년 ${farm.stdYield}, 조사 ${farm.actualYield}\n`;
                  textContent += `- 함수율: ${farm.moisture}% (${rice} 기준 ${farm.stdMoisture}%)\n`;
                  textContent += `- 결과: 피해율 ${
                    r.damageRate ? r.damageRate.toFixed(2) : "0.00"
                  }%\n`;
                  textContent += `----------------------------\n`;
                });
                try {
                  const textArea = document.createElement("textarea");
                  textArea.value = textContent;
                  document.body.appendChild(textArea);
                  textArea.select();
                  document.execCommand("copy");
                  document.body.removeChild(textArea);
                  showToast("전체 데이터가 복사되었습니다!");
                } catch (err) {
                  showToast("복사 실패: " + err);
                }
              }}
              className="flex-none flex items-center justify-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-sm active:scale-95 transition-all text-sm font-bold whitespace-nowrap"
            >
              <CopyIcon className="w-4 h-4" />
              <span>복사</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-x-auto overflow-y-hidden p-4">
        <div className="flex gap-4 h-full">
          {farms.map((farm, idx) => {
            const activeCount = getRiceSampleCount(
              farm.surveyTargetArea,
              farm.insureArea
            );
            const isEnabled = isFarmActive(farm.farmId);
            return (
              <div
                key={idx}
                className="w-[300px] flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-200 flex flex-col h-full overflow-hidden"
              >
                <div className="bg-gray-50 p-3 border-b flex justify-between items-center flex-none">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center ${
                        isEnabled ? "bg-blue-600" : "bg-gray-400"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="font-bold text-gray-800 text-base">
                      농지 입력
                    </span>
                  </div>
                  <button
                    onClick={() => handleReset(idx)}
                    className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-gray-100"
                    title="초기화"
                  >
                    <RefreshCwIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-3 space-y-4 scrollbar-thin">
                  <div className="flex flex-col gap-3">
                    <InputField
                      id={`f${idx}_farmId`}
                      onKeyDown={(e) => handleKeyDown(e, idx, "farmId")}
                      label="1. 농지번호(끝4자리)"
                      value={farm.farmId}
                      onChange={(val) => updateFarmData(idx, "farmId", val)}
                      placeholder="4자리 숫자"
                      highlight={isEnabled}
                      maxLength={4}
                      type="tel"
                      inputMode="numeric"
                    />
                    <InputField
                      id={`f${idx}_insureArea`}
                      onKeyDown={(e) => handleKeyDown(e, idx, "insureArea")}
                      label="2. 가입면적"
                      value={farm.insureArea}
                      onChange={(val) => updateFarmData(idx, "insureArea", val)}
                      type="number"
                      inputMode="decimal"
                      placeholder="m²"
                      disabled={!isEnabled}
                    />
                    <InputField
                      id={`f${idx}_witheredArea`}
                      onKeyDown={(e) => handleKeyDown(e, idx, "witheredArea")}
                      label="3. 고사면적"
                      value={farm.witheredArea}
                      onChange={(val) =>
                        updateFarmData(idx, "witheredArea", val)
                      }
                      type="number"
                      inputMode="decimal"
                      placeholder="m²"
                      disabled={!isEnabled}
                    />
                    <InputField
                      id={`f${idx}_uncompArea`}
                      onKeyDown={(e) => handleKeyDown(e, idx, "uncompArea")}
                      label="4. 미보상/타작물"
                      value={farm.uncompArea}
                      onChange={(val) => updateFarmData(idx, "uncompArea", val)}
                      type="number"
                      inputMode="decimal"
                      placeholder="m²"
                      disabled={!isEnabled}
                    />
                    <InputField
                      id={`f${idx}_preHarvestArea`}
                      onKeyDown={(e) => handleKeyDown(e, idx, "preHarvestArea")}
                      label="5. 기수확"
                      value={farm.preHarvestArea}
                      onChange={(val) =>
                        updateFarmData(idx, "preHarvestArea", val)
                      }
                      type="number"
                      inputMode="decimal"
                      placeholder="m²"
                      disabled={!isEnabled}
                    />
                    <InputField
                      label="6. 실제경작면적"
                      value={farm.surveyTargetArea}
                      readOnly={true}
                      placeholder="자동 (가입-고사-미보상-기수확)"
                      badge="자동"
                      highlight
                      disabled={!isEnabled}
                    />
                  </div>
                  <div className="border-t border-gray-200 mt-3"></div>
                  <div className="flex flex-col gap-3">
                    <InputField
                      id={`f${idx}_stdYield`}
                      onKeyDown={(e) => handleKeyDown(e, idx, "stdYield")}
                      label="7. 평년 수확량 (kg)"
                      value={farm.stdYield}
                      onChange={(val) => updateFarmData(idx, "stdYield", val)}
                      type="number"
                      inputMode="decimal"
                      disabled={!isEnabled}
                    />
                    <InputField
                      label="8. 표본구간 수"
                      value={activeCount > 0 ? `${activeCount} 구간` : "-"}
                      readOnly={true}
                      disabled={!isEnabled}
                      highlight
                      badge="자동"
                    />
                    <div
                      className={`flex gap-2 ${!isEnabled ? "opacity-50" : ""}`}
                    >
                      <InputField
                        id={`f${idx}_sampleLength`}
                        onKeyDown={(e) => handleKeyDown(e, idx, "sampleLength")}
                        label="9. 길이(m)"
                        value={farm.sampleLength}
                        onChange={(val) =>
                          updateFarmData(idx, "sampleLength", val)
                        }
                        type="number"
                        inputMode="decimal"
                        disabled={!isEnabled}
                        className="flex-1"
                      />
                      <InputField
                        id={`f${idx}_sampleWidth`}
                        onKeyDown={(e) => handleKeyDown(e, idx, "sampleWidth")}
                        label="폭(m)"
                        value={farm.sampleWidth}
                        onChange={(val) =>
                          updateFarmData(idx, "sampleWidth", val)
                        }
                        type="number"
                        inputMode="decimal"
                        disabled={!isEnabled}
                        className="flex-1"
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-gray-800 mb-2 text-sm flex items-center gap-1 ${
                          !isEnabled ? "opacity-50" : ""
                        }`}
                      >
                        10. 표본 (g)
                      </h3>
                      <div
                        className={`flex flex-col gap-2 mb-2 ${
                          !isEnabled ? "opacity-50 pointer-events-none" : ""
                        }`}
                      >
                        {farm.sampleValues.map((val, sampleIdx) => (
                          <div
                            key={sampleIdx}
                            className={`flex items-center gap-2 ${
                              sampleIdx >= activeCount ? "hidden" : ""
                            }`}
                          >
                            <span className="text-xs text-gray-500 w-5 text-center font-medium">
                              {sampleIdx + 1}
                            </span>
                            <input
                              id={`f${idx}_sample${sampleIdx}`}
                              onKeyDown={(e) =>
                                handleKeyDown(e, idx, `sample${sampleIdx}`)
                              }
                              type="text"
                              inputMode="decimal"
                              value={val}
                              onChange={(e) =>
                                handleSampleValueChange(
                                  idx,
                                  sampleIdx,
                                  e.target.value
                                )
                              }
                              disabled={!isEnabled}
                              placeholder={`표본 ${sampleIdx + 1}`}
                              className="flex-1 p-3 text-base border border-gray-300 rounded-lg text-left text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className={`flex flex-col gap-1 ${
                        isEnabled ? "opacity-50" : ""
                      }`}
                    >
                      <label className="text-sm font-bold text-gray-800">
                        11. 표본 합계 (자동)
                      </label>
                      <div className="flex border border-gray-300 rounded-lg overflow-hidden h-[45px] bg-white">
                        <div className="flex-1 flex items-center justify-center gap-1 bg-blue-50 text-blue-900 font-bold text-sm">
                          <span className="text-xs text-blue-500 font-normal">
                            무게:
                          </span>
                          {getRiceSampleSum(
                            farm.sampleValues,
                            activeCount
                          ).toFixed(0)}{" "}
                          g
                        </div>
                        <div className="w-[1px] bg-gray-300"></div>
                        <div className="flex-1 flex items-center justify-center gap-1 bg-blue-50 text-blue-900 font-bold text-sm">
                          <span className="text-xs text-blue-500 font-normal">
                            넓이:
                          </span>
                          {(
                            floatOrZero(farm.sampleLength) *
                            floatOrZero(farm.sampleWidth) *
                            activeCount
                          ).toFixed(2)}{" "}
                          m²
                        </div>
                      </div>
                    </div>
                    <div
                      className={`flex flex-col gap-1 ${
                        isEnabled ? "opacity-50" : ""
                      }`}
                    >
                      <InputField
                        id={`f${idx}_moisture`}
                        onKeyDown={(e) => handleKeyDown(e, idx, "moisture")}
                        label="12. 함수율(%)"
                        value={farm.moisture}
                        onChange={(val) => updateFarmData(idx, "moisture", val)}
                        type="number"
                        inputMode="decimal"
                        disabled={!isEnabled}
                      />
                      <div className="flex border border-gray-300 rounded-lg overflow-hidden h-[40px] mt-1">
                        <button
                          onClick={() => updateFarmData(idx, "riceType", "me")}
                          className={`flex-1 text-xs flex items-center justify-center transition-colors ${
                            farm.riceType === "me"
                              ? "bg-blue-600 text-white font-bold"
                              : "bg-white text-gray-700 hover:bg-gray-50"
                          }`}
                          disabled={!isEnabled}
                        >
                          기준: 메벼(15%)
                        </button>
                        <div className="w-[1px] bg-gray-300"></div>
                        <button
                          onClick={() =>
                            updateFarmData(idx, "riceType", "chal")
                          }
                          className={`flex-1 text-xs flex items-center justify-center transition-colors ${
                            farm.riceType === "chal"
                              ? "bg-blue-600 text-white font-bold"
                              : "bg-white text-gray-700 hover:bg-gray-50"
                          }`}
                          disabled={!isEnabled}
                        >
                          기준: 찰벼(13%)
                        </button>
                      </div>
                    </div>
                    <InputField
                      id={`f${idx}_uncompRatio`}
                      onKeyDown={(e) => handleKeyDown(e, idx, "uncompRatio")}
                      label="13. 미보상 비율 (%)"
                      value={farm.uncompRatio}
                      onChange={(val) =>
                        updateFarmData(idx, "uncompRatio", val)
                      }
                      type="number"
                      inputMode="decimal"
                      placeholder="%"
                      disabled={!isEnabled}
                      badge={
                        farm.uncompReduc > 0
                          ? `감수량: ${farm.uncompReduc}kg`
                          : null
                      }
                    />
                    <InputField
                      label="14. 조사 수확량 (kg)"
                      value={farm.actualYield}
                      readOnly={true}
                      disabled={!isEnabled}
                      highlight
                      badge="자동 (절사)"
                    />
                  </div>
                  <div className="border-t border-gray-200 mt-3"></div>
                  <div className="pt-3">
                    {farm.result && (
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-gray-900 text-base">
                            최종 피해율
                          </span>
                          <span
                            className={`font-extrabold text-xl ${
                              farm.result.damageRate > 20
                                ? "text-red-600"
                                : "text-gray-900"
                            }`}
                          >
                            {farm.result.damageRate.toFixed(2)}%
                          </span>
                        </div>
                        <button
                          onClick={() => toggleDetails(idx)}
                          className="w-full mt-3 flex items-center justify-center gap-1 text-xs text-gray-500 hover:bg-gray-100 p-2 rounded transition-colors"
                        >
                          {farm.showDetails
                            ? "계산과정 숨기기"
                            : "계산과정 보기"}
                          {farm.showDetails ? (
                            <ChevronUpIcon className="w-3 h-3" />
                          ) : (
                            <ChevronDownIcon className="w-3 h-3" />
                          )}
                        </button>
                        {farm.showDetails && renderCalculationDetails(farm)}
                      </div>
                    )}
                    {farm.error && (
                      <div className="text-red-600 text-sm mt-3 flex items-center gap-2 bg-red-50 p-2 rounded border border-red-100 font-medium">
                        <AlertCircleIcon className="w-4 h-4 shrink-0" />{" "}
                        {farm.error}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. 콩 피해율 계산기 (BeanCalculatorScreen) - NEW
// 벼와 거의 같지만 Loss율(0.93) 제외, 기본 함수율 14% 등
// 표본구간마다 길이/폭 개별 입력
// ==========================================
const initialBeanFarmState = {
  farmName: "",
  farmId: "",
  insureArea: "",
  witheredArea: "",
  uncompArea: "",
  preHarvestArea: "",
  surveyTargetArea: "",
  stdYield: "",
  actualYield: "",
  uncompReduc: "0",
  moisture: "",
  stdMoisture: "14", // 콩 기본 14%
  uncompRatio: "",
  sampleValues: Array(8).fill(""),
  sampleLengths: Array(8).fill(""), // 개별 길이
  sampleWidths: Array(8).fill(""), // 개별 폭
  result: null,
  error: "",
  showDetails: false,
};

// 콩 표본 구간 수 계산 (벼와 동일 로직 사용, 필요시 수정 가능)
const getBeanSampleCount = (targetAreaStr, insureAreaStr) => {
  const target = parseFloat(targetAreaStr) || parseFloat(insureAreaStr) || 0;
  if (target >= 10000) return 8;
  if (target >= 7500) return 7;
  if (target >= 5000) return 6;
  if (target >= 2500) return 5;
  return 4;
};

const BeanCalculatorScreen = ({ onBack, showToast }) => {
  const [farms, setFarms] = useState(
    Array.from({ length: 17 }, () => ({ ...initialBeanFarmState }))
  );
  const [surveyDate, setSurveyDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const isFarmActive = (farmId) => {
    return farmId && farmId.length === 4 && /^\d{4}$/.test(farmId);
  };

  const toggleDetails = (index) => {
    setFarms((prev) => {
      const newFarms = [...prev];
      newFarms[index] = {
        ...newFarms[index],
        showDetails: !newFarms[index].showDetails,
      };
      return newFarms;
    });
  };

  const updateFarmData = (index, field, value) => {
    setFarms((prevFarms) => {
      const newFarms = [...prevFarms];
      if (field === "farmId") {
        value = value.replace(/[^0-9]/g, "").slice(0, 4);
      }

      const currentFarm = { ...newFarms[index], [field]: value };

      // 면적 자동 계산
      if (
        ["insureArea", "witheredArea", "uncompArea", "preHarvestArea"].includes(
          field
        )
      ) {
        const insure = parseFloat(currentFarm.insureArea) || 0;
        const withered = parseFloat(currentFarm.witheredArea) || 0;
        const uncomp = parseFloat(currentFarm.uncompArea) || 0;
        const preHarvest = parseFloat(currentFarm.preHarvestArea) || 0;
        const calcTarget = insure - withered - uncomp - preHarvest;
        if (currentFarm.insureArea && calcTarget >= 0) {
          currentFarm.surveyTargetArea = calcTarget.toString();
        } else {
          currentFarm.surveyTargetArea = "0";
        }
      }

      const activeCount = getBeanSampleCount(
        currentFarm.surveyTargetArea,
        currentFarm.insureArea
      );

      const targetArea = floatOrZero(currentFarm.surveyTargetArea);
      const moistureVal = floatOrZero(currentFarm.moisture);
      const stdMoistureVal = floatOrZero(currentFarm.stdMoisture);
      const insureAreaVal = floatOrZero(currentFarm.insureArea);
      const stdYieldVal = floatOrZero(currentFarm.stdYield);
      const uncompAreaVal = floatOrZero(currentFarm.uncompArea);
      const preHarvestAreaVal = floatOrZero(currentFarm.preHarvestArea);

      let sumSamples = 0;
      let totalSampleArea = 0;

      for (let i = 0; i < activeCount; i++) {
        sumSamples += floatOrZero(currentFarm.sampleValues[i]);
        // 개별 면적 합산
        const l = floatOrZero(currentFarm.sampleLengths[i]);
        const w = floatOrZero(currentFarm.sampleWidths[i]);
        totalSampleArea += l * w;
      }

      if (totalSampleArea > 0 && targetArea > 0 && insureAreaVal > 0) {
        // *** 콩 계산 로직: 벼의 0.93 계수 제거 ***
        const numerator =
          (sumSamples * (1 - moistureVal / 100)) / (1 - stdMoistureVal / 100);
        const unitYield_g = floorTo(numerator / totalSampleArea, 2);

        const surveyYield_kg = floorTo((unitYield_g * targetArea) / 1000, 2);
        const otherAreaYield_kg = floorTo(
          (stdYieldVal / insureAreaVal) * (uncompAreaVal + preHarvestAreaVal),
          2
        );
        const totalYield = surveyYield_kg + otherAreaYield_kg;

        currentFarm.actualYield = floorTo(totalYield, 2).toFixed(2);
      } else if (sumSamples === 0) {
        if (field === "sampleValues" && sumSamples === 0)
          currentFarm.actualYield = "0";
      }

      const actual = floatOrZero(currentFarm.actualYield);
      const ratio = floatOrZero(currentFarm.uncompRatio);
      const diff = stdYieldVal - actual;
      if (diff > 0 && currentFarm.uncompRatio !== "") {
        currentFarm.uncompReduc = floorTo(diff * (ratio / 100), 2).toFixed(2);
      } else {
        currentFarm.uncompReduc = "0";
      }

      const uncompReducVal = floatOrZero(currentFarm.uncompReduc);
      const numerator = stdYieldVal - actual - uncompReducVal;
      let damageRate = 0;
      if (stdYieldVal > 0) {
        damageRate = numerator / stdYieldVal;
      }
      damageRate = Math.max(0.0, damageRate);

      currentFarm.result = {
        recognizedYield: actual + uncompReducVal,
        reductionAmount: numerator,
        damageRate: floorTo(damageRate * 100, 2),
        activeSampleCount: activeCount,
        totalSampleArea: totalSampleArea,
      };

      newFarms[index] = currentFarm;
      return newFarms;
    });
  };

  const handleSampleValueChange = (index, sampleIdx, field, val) => {
    // field: 'sampleValues' | 'sampleLengths' | 'sampleWidths'
    setFarms((prevFarms) => {
      const newFarms = [...prevFarms];
      const newArr = [...newFarms[index][field]];
      newArr[sampleIdx] = val;

      // 필드 업데이트를 위해 updateFarmData 호출
      const updatedFarm = { ...newFarms[index], [field]: newArr };

      // 직접 업데이트 후 재계산 로직을 포함하여 반환
      const result = updateFarmData(index, field, newArr)[index];
      newFarms[index] = result;
      return newFarms;
    });
  };

  const handleReset = (index) => {
    if (window.confirm(`${index + 1}번 콩 농지 데이터를 초기화하시겠습니까?`)) {
      setFarms((prev) => {
        const next = [...prev];
        next[index] = { ...initialBeanFarmState };
        return next;
      });
    }
  };

  const handleGlobalReset = () => {
    if (window.confirm("모든 17개 콩 농지의 데이터를 삭제하시겠습니까?")) {
      setFarms(Array.from({ length: 17 }, () => ({ ...initialBeanFarmState })));
    }
  };

  const handleKeyDown = (e, farmIdx, fieldName) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const currentFarm = farms[farmIdx];
      const activeCount = getBeanSampleCount(
        currentFarm.surveyTargetArea,
        currentFarm.insureArea
      );
      let fields = [
        "farmId",
        "insureArea",
        "witheredArea",
        "uncompArea",
        "preHarvestArea",
        "stdYield",
      ];

      // 순차적 입력: 길이 -> 폭 -> 중량
      for (let i = 0; i < activeCount; i++) {
        fields.push(`sample${i}_len`);
        fields.push(`sample${i}_wid`);
        fields.push(`sample${i}_wgt`);
      }

      fields.push("moisture");
      fields.push("stdMoisture");
      fields.push("uncompRatio");

      const currIdx = fields.indexOf(fieldName);
      if (currIdx !== -1 && currIdx < fields.length - 1) {
        const nextId = `b${farmIdx}_${fields[currIdx + 1]}`;
        const nextElement = document.getElementById(nextId);
        if (nextElement && !nextElement.disabled) {
          nextElement.focus();
          nextElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else if (currIdx === fields.length - 1) {
        if (farmIdx < farms.length - 1) {
          const nextFarmId = `b${farmIdx + 1}_farmId`;
          const nextFarmElement = document.getElementById(nextFarmId);
          if (nextFarmElement) {
            nextFarmElement.focus();
            nextFarmElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
          }
        }
      }
    }
  };

  const handleSaveToCSV = () => {
    // 필터링: 입력된 데이터가 있는 농지만 선택
    const activeFarms = farms.filter(
      (f) => f.farmId || f.insureArea || f.result
    );

    // 헤더: 미보상감수량, 인정수확량 삭제
    const headers = [
      "순번",
      "농지번호",
      "가입면적",
      "고사면적",
      "미보상면적",
      "기수확면적",
      "실제경작면적",
      "평년수확량",
      "표본구간수",
      "표본면적합계(m²)",
      "표본중량합계(g)",
      "함수율",
      "기준함수율",
      "미보상비율",
      "조사수확량",
      "감수량",
      "최종피해율(%)",
    ];

    const rows = activeFarms.map((farm, idx) => {
      const r = farm.result || {};
      const activeCount = getBeanSampleCount(
        farm.surveyTargetArea,
        farm.insureArea
      );
      const sampleSum = getRiceSampleSum(farm.sampleValues, activeCount);

      let totalSampleArea = 0;
      for (let i = 0; i < activeCount; i++) {
        totalSampleArea +=
          floatOrZero(farm.sampleLengths[i]) *
          floatOrZero(farm.sampleWidths[i]);
      }

      return [
        idx + 1,
        farm.farmId,
        formatComma(farm.insureArea),
        formatComma(farm.witheredArea),
        formatComma(farm.uncompArea),
        formatComma(farm.preHarvestArea),
        formatComma(farm.surveyTargetArea),
        formatComma(farm.stdYield),
        activeCount,
        totalSampleArea.toFixed(2),
        formatComma(sampleSum),
        farm.moisture,
        farm.stdMoisture,
        farm.uncompRatio,
        formatComma(farm.actualYield),
        r.reductionAmount ? formatComma(r.reductionAmount.toFixed(2)) : "",
        r.damageRate ? r.damageRate.toFixed(2) : "",
      ]
        .map((val) => `"${val}"`)
        .join(",");
    });

    if (rows.length === 0) {
      showToast("저장할 데이터가 없습니다.");
      return;
    }

    const csvContent = "\uFEFF" + [headers.join(","), ...rows].join("\n");
    try {
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `콩피해율조사_${surveyDate}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast("CSV 파일 다운로드가 시작되었습니다.");
    } catch (e) {
      showToast("다운로드 실패: 브라우저 보안 설정을 확인하세요.");
    }
  };

  const renderCalculationDetails = (farm) => {
    if (!farm.showDetails) return null;

    const activeCount = getBeanSampleCount(
      farm.surveyTargetArea,
      farm.insureArea
    );
    const sampleSum = getRiceSampleSum(farm.sampleValues, activeCount);

    let totalSampleArea = 0;
    let areaCalcString = [];
    for (let i = 0; i < activeCount; i++) {
      const l = floatOrZero(farm.sampleLengths[i]);
      const w = floatOrZero(farm.sampleWidths[i]);
      const area = l * w;
      if (area > 0) {
        totalSampleArea += area;
        areaCalcString.push(`(${l}×${w})`);
      }
    }

    const moisture = floatOrZero(farm.moisture);
    const stdMoisture = floatOrZero(farm.stdMoisture);

    const targetArea = floatOrZero(farm.surveyTargetArea);

    let unitYield = 0;
    if (totalSampleArea > 0) {
      const numerator =
        (sampleSum * (1 - moisture / 100)) / (1 - stdMoisture / 100);
      unitYield = numerator / totalSampleArea;
    }
    const unitYieldFinal = floorTo(unitYield, 2);
    const surveyYield = floorTo((unitYieldFinal * targetArea) / 1000, 2);

    const stdYield = floatOrZero(farm.stdYield);
    const insureArea = floatOrZero(farm.insureArea);
    const otherArea =
      floatOrZero(farm.uncompArea) + floatOrZero(farm.preHarvestArea);
    const otherYield =
      insureArea > 0 ? floorTo((stdYield / insureArea) * otherArea, 2) : 0;

    const actualYield = floatOrZero(farm.actualYield);
    const uncompReduc = floatOrZero(farm.uncompReduc);

    const isHighDamage = farm.result?.damageRate > 20;
    const damageColorClass = isHighDamage ? "text-red-600" : "text-gray-900";

    return (
      <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600 bg-amber-50 p-3 rounded-lg space-y-3">
        <p className="font-bold text-sm text-gray-800 flex items-center gap-1">
          <CalculatorIcon className="w-3 h-3" /> 상세 계산 과정 (콩 - 개별 면적
          합산)
        </p>

        <div className="space-y-1">
          <p className="font-semibold text-gray-700">
            1. 표본구간 단위수확량 (g/m²)
          </p>
          <div className="pl-2 border-l-2 border-amber-300">
            <p>
              ① 표본중량합:{" "}
              <span className="font-mono text-amber-700">
                {sampleSum.toFixed(0)}g
              </span>
            </p>
            <p>
              ② 표본면적합:{" "}
              <span className="font-mono text-amber-700">
                {totalSampleArea.toFixed(2)}m²
              </span>
            </p>
            <p className="text-[10px] text-gray-400 break-all pl-2">
              {" "}
              {areaCalcString.length > 0
                ? `└ ${areaCalcString.join(" + ")}`
                : ""}
            </p>
            <div className="mt-1 bg-white p-2 rounded font-mono text-[10px] break-all border border-amber-200">
              <div className="mb-1 text-gray-500 font-bold">
                [계산식] (0.93 없음)
              </div>
              <span className="text-gray-700">
                {"{"} {sampleSum} × (1-{moisture / 100}) ÷ (1-
                {stdMoisture / 100}) {"}"} ÷ {totalSampleArea.toFixed(2)}
              </span>
              <br />={" "}
              <span className="font-bold text-amber-700">
                {unitYieldFinal.toFixed(2)} g/m²
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <p className="font-semibold text-gray-700">2. 전체 수확량 (kg)</p>
          <div className="pl-2 border-l-2 border-amber-300">
            <p>
              ① 실제경작 수확:{" "}
              <span className="font-mono">
                {unitYieldFinal.toFixed(2)} × {targetArea} ÷ 1000 ={" "}
                {surveyYield.toFixed(2)}kg
              </span>
            </p>
            <p className="mt-1 font-bold text-gray-800">
              합계 (조사 + 타작물):{" "}
              <span className="text-lg">{actualYield} kg</span>
            </p>
          </div>
        </div>

        <div className="space-y-1 bg-white p-2 rounded border border-amber-200">
          <p className="font-semibold text-gray-800">3. 최종 피해율 (%)</p>
          <p
            className={`text-right text-lg font-extrabold ${damageColorClass}`}
          >
            = {farm.result?.damageRate.toFixed(2)} %
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-amber-50 font-sans overflow-hidden">
      <div className="bg-white border-b z-20 shadow-sm flex-none">
        <div className="p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <button
                onClick={onBack}
                className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-700"
              >
                <ArrowLeftIcon className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2 text-amber-700">
                <CircleDotIcon className="w-6 h-6" />
                <h1 className="text-lg font-bold">3. 콩 (17개 농지)</h1>
              </div>
            </div>
            <button
              onClick={handleGlobalReset}
              className="text-xs text-gray-500 hover:text-red-500 border border-gray-300 px-3 py-1 rounded bg-gray-50 hover:bg-red-50"
            >
              전체 초기화
            </button>
          </div>
          <div className="flex gap-2 items-stretch">
            <div className="flex items-center gap-2 bg-amber-100 p-2 rounded-lg border border-amber-200 flex-1">
              <CalendarIcon className="w-5 h-5 text-amber-600 shrink-0" />
              <span className="text-sm font-bold text-amber-800 whitespace-nowrap">
                일자:
              </span>
              <input
                type="date"
                value={surveyDate}
                onChange={(e) => setSurveyDate(e.target.value)}
                className="bg-white border border-amber-200 rounded px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-amber-500 text-gray-800 font-medium w-full min-w-0"
              />
            </div>
            <button
              onClick={handleSaveToCSV}
              className="flex-none flex items-center justify-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-sm active:scale-95 transition-all text-sm font-bold whitespace-nowrap"
            >
              <DownloadIcon className="w-4 h-4" /> <span>저장</span>
            </button>
            <button
              onClick={() => {
                let textContent = `[콩 피해율 조사 - ${surveyDate}]\n\n`;
                const activeFarms = farms.filter(
                  (f) => f.farmId || f.insureArea || f.result
                );
                if (activeFarms.length === 0) {
                  showToast("입력된 농지 데이터가 없습니다.");
                  return;
                }
                activeFarms.forEach((farm, idx) => {
                  const r = farm.result || {};
                  const activeCount = getBeanSampleCount(
                    farm.surveyTargetArea,
                    farm.insureArea
                  );
                  let areaSum = 0;
                  for (let i = 0; i < activeCount; i++)
                    areaSum +=
                      floatOrZero(farm.sampleLengths[i]) *
                      floatOrZero(farm.sampleWidths[i]);

                  textContent += `■ 콩 농지 ${idx + 1} (${
                    farm.farmId || "번호없음"
                  })\n`;
                  textContent += `- 면적: 가입 ${farm.insureArea}, 실제경작 ${farm.surveyTargetArea}\n`;
                  textContent += `- 표본: 총 ${activeCount}구간 (합계면적: ${areaSum.toFixed(
                    2
                  )}m²)\n`;
                  textContent += `- 수확량: 평년 ${farm.stdYield}, 조사 ${farm.actualYield}\n`;
                  textContent += `- 함수율: ${farm.moisture}% (기준 ${farm.stdMoisture}%)\n`;
                  textContent += `- 결과: 피해율 ${
                    r.damageRate ? r.damageRate.toFixed(2) : "0.00"
                  }%\n`;
                  textContent += `----------------------------\n`;
                });
                try {
                  const textArea = document.createElement("textarea");
                  textArea.value = textContent;
                  document.body.appendChild(textArea);
                  textArea.select();
                  document.execCommand("copy");
                  document.body.removeChild(textArea);
                  showToast("전체 데이터가 복사되었습니다!");
                } catch (err) {
                  showToast("복사 실패: " + err);
                }
              }}
              className="flex-none flex items-center justify-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-sm active:scale-95 transition-all text-sm font-bold whitespace-nowrap"
            >
              <CopyIcon className="w-4 h-4" />
              <span>복사</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-x-auto overflow-y-hidden p-4">
        <div className="flex gap-4 h-full">
          {farms.map((farm, idx) => {
            const activeCount = getBeanSampleCount(
              farm.surveyTargetArea,
              farm.insureArea
            );
            const isEnabled = isFarmActive(farm.farmId);
            return (
              <div
                key={idx}
                className="w-[300px] flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-200 flex flex-col h-full overflow-hidden"
              >
                <div className="bg-amber-50 p-3 border-b flex justify-between items-center flex-none">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center ${
                        isEnabled ? "bg-amber-600" : "bg-gray-400"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="font-bold text-gray-800 text-base">
                      콩 농지 입력
                    </span>
                  </div>
                  <button
                    onClick={() => handleReset(idx)}
                    className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-gray-100"
                    title="초기화"
                  >
                    <RefreshCwIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-3 space-y-4 scrollbar-thin">
                  <div className="flex flex-col gap-3">
                    <InputField
                      id={`b${idx}_farmId`}
                      onKeyDown={(e) => handleKeyDown(e, idx, "farmId")}
                      label="1. 농지번호(끝4자리)"
                      value={farm.farmId}
                      onChange={(val) => updateFarmData(idx, "farmId", val)}
                      placeholder="4자리 숫자"
                      highlight={isEnabled}
                      maxLength={4}
                      type="tel"
                      inputMode="numeric"
                    />
                    <InputField
                      id={`b${idx}_insureArea`}
                      onKeyDown={(e) => handleKeyDown(e, idx, "insureArea")}
                      label="2. 가입면적"
                      value={farm.insureArea}
                      onChange={(val) => updateFarmData(idx, "insureArea", val)}
                      type="number"
                      inputMode="decimal"
                      placeholder="m²"
                      disabled={!isEnabled}
                    />
                    <InputField
                      id={`b${idx}_witheredArea`}
                      onKeyDown={(e) => handleKeyDown(e, idx, "witheredArea")}
                      label="3. 고사면적"
                      value={farm.witheredArea}
                      onChange={(val) =>
                        updateFarmData(idx, "witheredArea", val)
                      }
                      type="number"
                      inputMode="decimal"
                      placeholder="m²"
                      disabled={!isEnabled}
                    />
                    <InputField
                      id={`b${idx}_uncompArea`}
                      onKeyDown={(e) => handleKeyDown(e, idx, "uncompArea")}
                      label="4. 미보상/타작물"
                      value={farm.uncompArea}
                      onChange={(val) => updateFarmData(idx, "uncompArea", val)}
                      type="number"
                      inputMode="decimal"
                      placeholder="m²"
                      disabled={!isEnabled}
                    />
                    <InputField
                      id={`b${idx}_preHarvestArea`}
                      onKeyDown={(e) => handleKeyDown(e, idx, "preHarvestArea")}
                      label="5. 기수확"
                      value={farm.preHarvestArea}
                      onChange={(val) =>
                        updateFarmData(idx, "preHarvestArea", val)
                      }
                      type="number"
                      inputMode="decimal"
                      placeholder="m²"
                      disabled={!isEnabled}
                    />
                    <InputField
                      label="6. 실제경작면적"
                      value={farm.surveyTargetArea}
                      readOnly={true}
                      placeholder="자동 (가입-고사-미보상-기수확)"
                      badge="자동"
                      highlight
                      disabled={!isEnabled}
                    />
                  </div>
                  <div className="border-t border-gray-200 mt-3"></div>
                  <div className="flex flex-col gap-3">
                    <InputField
                      id={`b${idx}_stdYield`}
                      onKeyDown={(e) => handleKeyDown(e, idx, "stdYield")}
                      label="7. 평년 수확량 (kg)"
                      value={farm.stdYield}
                      onChange={(val) => updateFarmData(idx, "stdYield", val)}
                      type="number"
                      inputMode="decimal"
                      disabled={!isEnabled}
                    />
                    <InputField
                      label="8. 표본구간 수"
                      value={activeCount > 0 ? `${activeCount} 구간` : "-"}
                      readOnly={true}
                      disabled={!isEnabled}
                      highlight
                      badge="자동"
                    />

                    {/* 개별 입력 루프 */}
                    <div>
                      <h3
                        className={`font-bold text-gray-800 mb-2 text-sm flex items-center gap-1 ${
                          !isEnabled ? "opacity-50" : ""
                        }`}
                      >
                        9. 표본 구간별 입력
                      </h3>
                      <div
                        className={`flex flex-col gap-2 mb-2 ${
                          !isEnabled ? "opacity-50 pointer-events-none" : ""
                        }`}
                      >
                        {Array.from({ length: activeCount }).map(
                          (_, sampleIdx) => (
                            <div
                              key={sampleIdx}
                              className="flex gap-1 items-center bg-gray-50 p-1.5 rounded border border-gray-100"
                            >
                              <span className="text-xs text-gray-500 w-5 text-center font-medium font-mono">
                                {sampleIdx + 1}
                              </span>
                              <div className="flex-1 flex gap-1">
                                <input
                                  id={`b${idx}_sample${sampleIdx}_len`}
                                  onKeyDown={(e) =>
                                    handleKeyDown(
                                      e,
                                      idx,
                                      `sample${sampleIdx}_len`
                                    )
                                  }
                                  type="text"
                                  inputMode="decimal"
                                  value={farm.sampleLengths[sampleIdx]}
                                  onChange={(e) =>
                                    handleSampleValueChange(
                                      idx,
                                      sampleIdx,
                                      "sampleLengths",
                                      e.target.value
                                    )
                                  }
                                  disabled={!isEnabled}
                                  placeholder="길이(m)"
                                  className="w-full p-2 text-sm border border-gray-300 rounded text-center text-gray-900 focus:ring-1 focus:ring-amber-500 outline-none"
                                />
                                <input
                                  id={`b${idx}_sample${sampleIdx}_wid`}
                                  onKeyDown={(e) =>
                                    handleKeyDown(
                                      e,
                                      idx,
                                      `sample${sampleIdx}_wid`
                                    )
                                  }
                                  type="text"
                                  inputMode="decimal"
                                  value={farm.sampleWidths[sampleIdx]}
                                  onChange={(e) =>
                                    handleSampleValueChange(
                                      idx,
                                      sampleIdx,
                                      "sampleWidths",
                                      e.target.value
                                    )
                                  }
                                  disabled={!isEnabled}
                                  placeholder="폭(m)"
                                  className="w-full p-2 text-sm border border-gray-300 rounded text-center text-gray-900 focus:ring-1 focus:ring-amber-500 outline-none"
                                />
                                <input
                                  id={`b${idx}_sample${sampleIdx}_wgt`}
                                  onKeyDown={(e) =>
                                    handleKeyDown(
                                      e,
                                      idx,
                                      `sample${sampleIdx}_wgt`
                                    )
                                  }
                                  type="text"
                                  inputMode="decimal"
                                  value={farm.sampleValues[sampleIdx]}
                                  onChange={(e) =>
                                    handleSampleValueChange(
                                      idx,
                                      sampleIdx,
                                      "sampleValues",
                                      e.target.value
                                    )
                                  }
                                  disabled={!isEnabled}
                                  placeholder="중량(g)"
                                  className="w-full p-2 text-sm border border-gray-300 rounded text-center text-gray-900 focus:ring-1 focus:ring-amber-500 outline-none bg-white font-bold"
                                />
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div
                      className={`flex flex-col gap-1 ${
                        isEnabled ? "opacity-50" : ""
                      }`}
                    >
                      <label className="text-sm font-bold text-gray-800">
                        10. 표본 합계 (자동)
                      </label>
                      <div className="flex border border-gray-300 rounded-lg overflow-hidden h-[45px] bg-white">
                        <div className="flex-1 flex items-center justify-center gap-1 bg-amber-50 text-amber-900 font-bold text-sm">
                          <span className="text-xs text-amber-500 font-normal">
                            총무게:
                          </span>
                          {getRiceSampleSum(
                            farm.sampleValues,
                            activeCount
                          ).toFixed(0)}{" "}
                          g
                        </div>
                        <div className="w-[1px] bg-gray-300"></div>
                        <div className="flex-1 flex items-center justify-center gap-1 bg-amber-50 text-amber-900 font-bold text-sm">
                          <span className="text-xs text-amber-500 font-normal">
                            총면적:
                          </span>
                          {farm.result
                            ? farm.result.totalSampleArea.toFixed(2)
                            : "0.00"}{" "}
                          m²
                        </div>
                      </div>
                    </div>
                    <div
                      className={`flex gap-2 ${!isEnabled ? "opacity-50" : ""}`}
                    >
                      <InputField
                        id={`b${idx}_moisture`}
                        onKeyDown={(e) => handleKeyDown(e, idx, "moisture")}
                        label="11. 함수율(%)"
                        value={farm.moisture}
                        onChange={(val) => updateFarmData(idx, "moisture", val)}
                        type="number"
                        inputMode="decimal"
                        disabled={!isEnabled}
                        className="flex-1"
                      />
                      <InputField
                        id={`b${idx}_stdMoisture`}
                        onKeyDown={(e) => handleKeyDown(e, idx, "stdMoisture")}
                        label="기준(%)"
                        value={farm.stdMoisture}
                        onChange={(val) =>
                          updateFarmData(idx, "stdMoisture", val)
                        }
                        type="number"
                        inputMode="decimal"
                        disabled={!isEnabled}
                        className="w-20"
                      />
                    </div>
                    <InputField
                      id={`b${idx}_uncompRatio`}
                      onKeyDown={(e) => handleKeyDown(e, idx, "uncompRatio")}
                      label="12. 미보상 비율 (%)"
                      value={farm.uncompRatio}
                      onChange={(val) =>
                        updateFarmData(idx, "uncompRatio", val)
                      }
                      type="number"
                      inputMode="decimal"
                      placeholder="%"
                      disabled={!isEnabled}
                      badge={
                        farm.uncompReduc > 0
                          ? `감수량: ${farm.uncompReduc}kg`
                          : null
                      }
                    />
                    <InputField
                      label="13. 조사 수확량 (kg)"
                      value={farm.actualYield}
                      readOnly={true}
                      disabled={!isEnabled}
                      highlight
                      badge="자동 (절사)"
                    />
                  </div>
                  <div className="border-t border-gray-200 mt-3"></div>
                  <div className="pt-3">
                    {farm.result && (
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-gray-900 text-base">
                            최종 피해율
                          </span>
                          <span
                            className={`font-extrabold text-xl ${
                              farm.result.damageRate > 20
                                ? "text-red-600"
                                : "text-gray-900"
                            }`}
                          >
                            {farm.result.damageRate.toFixed(2)}%
                          </span>
                        </div>
                        <button
                          onClick={() => toggleDetails(idx)}
                          className="w-full mt-3 flex items-center justify-center gap-1 text-xs text-gray-500 hover:bg-gray-100 p-2 rounded transition-colors"
                        >
                          {farm.showDetails
                            ? "계산과정 숨기기"
                            : "계산과정 보기"}
                          {farm.showDetails ? (
                            <ChevronUpIcon className="w-3 h-3" />
                          ) : (
                            <ChevronDownIcon className="w-3 h-3" />
                          )}
                        </button>
                        {farm.showDetails && renderCalculationDetails(farm)}
                      </div>
                    )}
                    {farm.error && (
                      <div className="text-red-600 text-sm mt-3 flex items-center gap-2 bg-red-50 p-2 rounded border border-red-100 font-medium">
                        <AlertCircleIcon className="w-4 h-4 shrink-0" />{" "}
                        {farm.error}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 6. 배추 피해율 계산기 (CabbageCalculatorScreen)
// ==========================================

const getInitialCabbageSample = () => ({
  surveyTotal: "",
  normal: "",
  d1: "",
  d2: "",
  d3: "",
  d4: "",
  d5: "",
  d6: "",
  d7: "",
  d8: "",
  d9: "",
  d10: "",
});

const initialCabbageFarmState = {
  farmId: "",
  cultivatedArea: "", // 2. 실경작면적 (m²)
  damageArea: "", // 3. 피해면적 (m²) - 표본구간 생성 기준

  sampleData: [], // 동적 표본 데이터 배열

  // 총 합계 및 결과
  totalSurveyTotal: "0",
  totalSumCategories: "0",
  damageRatio: "0.00", // 손해정도비율 (총합 가중치/총 조사계)
  rawDamageRate: "0.00", // 미보상 적용 전 피해율 (면적X손해정도비율)
  finalDamageRate: "0.00", // 최종피해율 (raw - raw*uncomp)
  uncompRatio: "", // 6. 미보상 비율 (%)

  result: null,
  error: "",
  showDetails: false,
};

const getCabbageSampleCount = (damageAreaStr) => {
  const area = parseFloat(damageAreaStr) || 0;
  if (area >= 15000) return 10;
  if (area >= 8000) return 8;
  if (area >= 6000) return 6;
  if (area >= 3000) return 4;
  return 4; // 3000 미만도 4개로 설정
};

// 피해 등급별 라벨과 백분율 값
const DAMAGE_LEVELS = [
  { key: "d1", label: "10%형", percent: 0.1, field: "d1" },
  { key: "d2", label: "20%형", percent: 0.2, field: "d2" },
  { key: "d3", label: "30%형", percent: 0.3, field: "d3" },
  { key: "d4", label: "40%형", percent: 0.4, field: "d4" },
  { key: "d5", label: "50%형", percent: 0.5, field: "d5" },
  { key: "d6", label: "60%형", percent: 0.6, field: "d6" },
  { key: "d7", label: "70%형", percent: 0.7, field: "d7" },
  { key: "d8", label: "80%형", percent: 0.8, field: "d8" },
  { key: "d9", label: "90%형", percent: 0.9, field: "d9" },
  { key: "d10", label: "100%형", percent: 1.0, field: "d10" },
];

const calculateCabbageResults = (farm) => {
  let grandTotalPlants = 0;
  let grandSumCategories = 0;
  let grandWeightedSum = 0;
  const mismatchSamples = [];

  farm.sampleData.forEach((sample, sampleIndex) => {
    const totalPlants = floatOrZero(sample.surveyTotal);
    const normal = floatOrZero(sample.normal);
    let sumCategories = normal;
    let weightedSum = 0;

    DAMAGE_LEVELS.forEach((level) => {
      const count = floatOrZero(sample[level.key]);
      sumCategories += count;
      weightedSum += count * level.percent;
    });

    if (totalPlants !== sumCategories && totalPlants > 0 && sumCategories > 0) {
      mismatchSamples.push(sampleIndex + 1);
    }

    grandTotalPlants += totalPlants;
    grandSumCategories += sumCategories;
    grandWeightedSum += weightedSum;
  });

  let damageRatioValue = 0;
  if (grandTotalPlants > 0) {
    damageRatioValue = grandWeightedSum / grandTotalPlants;
  }

  const damageArea = floatOrZero(farm.damageArea);
  const cultivatedArea = floatOrZero(farm.cultivatedArea);
  let rawDamageRate = 0;

  if (cultivatedArea > 0) {
    const areaRatio = damageArea / cultivatedArea;
    rawDamageRate = areaRatio * damageRatioValue;
  }

  const uncompRatio = floatOrZero(farm.uncompRatio);
  let finalDamageRate = rawDamageRate;

  if (rawDamageRate > 0 && uncompRatio > 0) {
    finalDamageRate = rawDamageRate - (rawDamageRate * uncompRatio) / 100;
  }
  finalDamageRate = Math.max(0, finalDamageRate);

  let error = "";
  if (mismatchSamples.length > 0) {
    error = `표본 합계 불일치: ${mismatchSamples.join(
      ", "
    )}번 표본의 조사계와 합계가 다릅니다.`;
  } else if (grandTotalPlants !== grandSumCategories && grandTotalPlants > 0) {
    error = "총 조사계와 피해등급 총 합계가 일치해야 합니다.";
  }

  return {
    totalSurveyTotal: grandTotalPlants.toFixed(0),
    totalSumCategories: grandSumCategories.toFixed(0),
    damageRatio: floorTo(damageRatioValue * 100, 2).toFixed(2),
    rawDamageRate: floorTo(rawDamageRate * 100, 2).toFixed(2),
    finalDamageRate: floorTo(finalDamageRate * 100, 2).toFixed(2),
    error: error,
    weightedSum: grandWeightedSum,
    totalPlants: grandTotalPlants,
  };
};

const CabbageSampleInput = ({
  farmIdx,
  sampleIdx,
  sample,
  updateCabbageSampleData,
  handleKeyDown,
  isEnabled,
}) => {
  const baseId = `cabbage_f${farmIdx}_sample${sampleIdx}_`;

  const calculateLocalResults = (currentSample) => {
    const surveyTotal = floatOrZero(currentSample.surveyTotal);
    const normal = floatOrZero(currentSample.normal);
    let sumCategories = normal;
    let weightedSum = 0;

    DAMAGE_LEVELS.forEach((level) => {
      const count = floatOrZero(currentSample[level.key]);
      sumCategories += count;
      weightedSum += count * level.percent;
    });

    let damageRatio = 0;
    if (surveyTotal > 0) {
      damageRatio = weightedSum / surveyTotal;
    }

    return {
      isMismatch:
        surveyTotal !== sumCategories && surveyTotal > 0 && sumCategories > 0,
      sumCategories: sumCategories,
      damageRatio: floorTo(damageRatio * 100, 2),
    };
  };

  const localResults = calculateLocalResults(sample);
  const isMismatch = localResults.isMismatch;
  const sumCategories = localResults.sumCategories;
  const damageRatio = localResults.damageRatio;

  const handleLocalKeyDown = (e, fieldKey) => {
    handleKeyDown(e, farmIdx, `sample${sampleIdx}_${fieldKey}`);
  };

  return (
    <div
      className={`w-36 flex-shrink-0 p-1.5 rounded-lg border border-emerald-300 bg-white shadow-md transition-all ${
        !isEnabled ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <div className="text-center font-bold text-sm text-emerald-700 mb-1 border-b border-emerald-100 pb-0.5">
        표본 {sampleIdx + 1}
      </div>
      <div className="space-y-1">
        <InputField
          size="compact"
          id={`${baseId}surveyTotal`}
          onKeyDown={(e) => handleLocalKeyDown(e, "surveyTotal")}
          label="조사계"
          value={sample.surveyTotal}
          onChange={(val) =>
            updateCabbageSampleData(farmIdx, sampleIdx, "surveyTotal", val)
          }
          type="number"
          inputMode="numeric"
          disabled={!isEnabled}
          highlight={isMismatch}
          className="text-sm"
        />
        <InputField
          size="compact"
          id={`${baseId}normal`}
          onKeyDown={(e) => handleLocalKeyDown(e, "normal")}
          label="정상"
          value={sample.normal}
          onChange={(val) =>
            updateCabbageSampleData(farmIdx, sampleIdx, "normal", val)
          }
          type="number"
          inputMode="numeric"
          disabled={!isEnabled}
          className="text-sm"
        />
        <div className="space-y-1 pt-1 border-t border-gray-100">
          {DAMAGE_LEVELS.map((level) => (
            <InputField
              size="compact"
              key={level.key}
              id={`${baseId}${level.key}`}
              onKeyDown={(e) => handleLocalKeyDown(e, level.key)}
              label={`${level.label}`}
              value={sample[level.key]}
              onChange={(val) =>
                updateCabbageSampleData(farmIdx, sampleIdx, level.key, val)
              }
              type="number"
              inputMode="numeric"
              disabled={!isEnabled}
              className="text-sm"
            />
          ))}
        </div>

        <InputField
          size="compact"
          id={`${baseId}total`}
          onKeyDown={(e) => handleLocalKeyDown(e, "total")}
          label="합계"
          value={sumCategories.toFixed(0)}
          readOnly={true}
          highlight={isMismatch}
          className="text-sm pt-1 border-t border-gray-100"
        />

        <InputField
          size="compact"
          id={`${baseId}damageRatio`}
          onKeyDown={(e) => handleLocalKeyDown(e, "damageRatio")}
          label="손해정도비율(%)"
          value={damageRatio.toFixed(2)}
          readOnly={true}
          highlight={damageRatio > 0}
          className="text-sm pb-0.5"
        />
      </div>
    </div>
  );
};

const CabbageCalculatorScreen = ({ onBack, showToast }) => {
  const [farms, setFarms] = useState(
    Array.from({ length: 17 }, () => ({ ...initialCabbageFarmState }))
  );
  const [currentFarmIndex, setCurrentFarmIndex] = useState(0);
  const [surveyDate, setSurveyDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    const hasActiveData = farms.some(
      (f) => f.farmId || f.cultivatedArea || f.damageArea || f.uncompRatio
    );

    if (hasActiveData) {
      if (
        window.confirm(
          `날짜가 변경되었습니다. 기존 입력된 ${farms.length}개 농지 데이터를 초기화하시겠습니까?`
        )
      ) {
        setFarms(
          Array.from({ length: 17 }, () => ({ ...initialCabbageFarmState }))
        );
        setCurrentFarmIndex(0);
      }
    }
  }, [surveyDate]);

  const isFarmActive = (farmId) => {
    return farmId && farmId.length === 4 && /^\d{4}$/.test(farmId);
  };

  const toggleDetails = (index) => {
    setFarms((prev) => {
      const newFarms = [...prev];
      newFarms[index] = {
        ...newFarms[index],
        showDetails: !newFarms[index].showDetails,
      };
      return newFarms;
    });
  };

  const farm = farms[currentFarmIndex];
  const idx = currentFarmIndex;
  const isEnabled = isFarmActive(farm.farmId);
  const activeCount = getCabbageSampleCount(farm.damageArea);

  const handlePrevFarm = () => {
    setCurrentFarmIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextFarm = () => {
    setCurrentFarmIndex((prev) => Math.min(farms.length - 1, prev + 1));
  };

  const renderCabbageDetails = (farm) => {
    if (!farm.showDetails || !farm.result) return null;

    const results = calculateCabbageResults(farm);
    const damageArea = floatOrZero(farm.damageArea);
    const cultivatedArea = floatOrZero(farm.cultivatedArea);
    const totalPlants = results.totalPlants;
    const isHighDamage = floatOrZero(farm.finalDamageRate) > 20;

    const rawDamageRate = floatOrZero(results.rawDamageRate);
    const uncompRatio = floatOrZero(farm.uncompRatio);

    return (
      <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600 bg-gray-50 p-3 rounded-lg space-y-3">
        <p className="font-bold text-sm text-gray-800 flex items-center gap-1">
          <CalculatorIcon className="w-3 h-3" /> 상세 계산 과정
        </p>

        <div className="space-y-1">
          <p className="font-semibold text-gray-700">1. 총 조사계 및 총 합계</p>
          <div className="pl-2 border-l-2 border-gray-300">
            <p>
              총 조사계 (모든 표본):{" "}
              <span className="font-mono text-blue-600">
                {results.totalSurveyTotal}
              </span>
            </p>
            <p>
              총 합계 (정상+피해):{" "}
              <span className="font-mono text-blue-600">
                {results.totalSumCategories}
              </span>
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="font-semibold text-gray-700">
            2. 손해 등급별 가중치 총 합계
          </p>
          <div className="pl-2 border-l-2 border-gray-300">
            <p className="font-mono text-[10px] break-all">
              <span className="font-bold text-gray-700">총 가중치 합</span> =
              Σ(각 표본의 피해 등급 수 × 등급 비율)
            </p>
            <p className="font-mono text-base font-bold text-blue-700">
              = {results.weightedSum.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="font-semibold text-gray-700">3. 손해정도비율 (%)</p>
          <div className="pl-2 border-l-2 border-gray-300">
            <p className="font-mono text-xs mb-1 text-gray-500">
              (총 가중치 합) ÷ (총 조사계)
            </p>
            <p className="font-mono text-sm font-bold text-gray-700">
              {results.weightedSum.toFixed(2)} ÷ {totalPlants}
            </p>
            <p className="text-right text-lg font-extrabold text-blue-700">
              = {farm.damageRatio}%
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="font-semibold text-gray-700">4. 피해율 (미보상 전)</p>
          <div className="pl-2 border-l-2 border-gray-300">
            <p className="font-mono text-xs mb-1 text-gray-500">
              (피해 면적 / 실경작 면적) × 손해정도비율
            </p>
            <p className="font-mono text-sm font-bold text-gray-700">
              {damageArea} / {cultivatedArea} × {farm.damageRatio}%
            </p>
            <p className="text-right text-lg font-extrabold text-blue-700">
              = {rawDamageRate.toFixed(2)}%
            </p>
          </div>
        </div>

        <div className="space-y-1 bg-white p-2 rounded border border-gray-200">
          <p className="font-semibold text-gray-800">5. 최종 피해율 (%)</p>
          <div className="pl-2 border-l-2 border-gray-300">
            <p className="font-mono text-xs mb-1 text-gray-500">
              피해율 - (피해율 × 미보상비율)
            </p>
            <p className="font-mono text-sm font-bold text-gray-700">
              {rawDamageRate.toFixed(2)}% - ({rawDamageRate.toFixed(2)}% ×{" "}
              {uncompRatio}%)
            </p>
            <p
              className={`text-right text-lg font-extrabold ${
                isHighDamage ? "text-red-600" : "text-gray-900"
              }`}
            >
              = {farm.finalDamageRate}%
            </p>
          </div>
        </div>
      </div>
    );
  };

  const updateFarmData = (index, field, value) => {
    setFarms((prevFarms) => {
      const newFarms = [...prevFarms];
      if (field === "farmId") {
        value = value.replace(/[^0-9]/g, "").slice(0, 4);
      }

      const currentFarm = { ...newFarms[index], [field]: value };

      const newActiveCount = getCabbageSampleCount(currentFarm.damageArea);
      if (field === "damageArea") {
        const existingSamples = currentFarm.sampleData;
        const updatedSamples = Array.from({ length: newActiveCount }, (_, i) =>
          existingSamples[i] ? existingSamples[i] : getInitialCabbageSample()
        );
        currentFarm.sampleData = updatedSamples;
      }

      const results = calculateCabbageResults(currentFarm);

      currentFarm.totalSurveyTotal = results.totalSurveyTotal;
      currentFarm.totalSumCategories = results.totalSumCategories;
      currentFarm.damageRatio = results.damageRatio;
      currentFarm.rawDamageRate = results.rawDamageRate;
      currentFarm.finalDamageRate = results.finalDamageRate;
      currentFarm.error = results.error;
      currentFarm.result = {
        damageRatio: floatOrZero(results.damageRatio),
        rawDamageRate: floatOrZero(results.rawDamageRate),
        finalDamageRate: floatOrZero(results.finalDamageRate),
      };

      newFarms[index] = currentFarm;
      return newFarms;
    });
  };

  const updateCabbageSampleData = (
    farmIndex,
    sampleIndex,
    sampleField,
    value
  ) => {
    setFarms((prevFarms) => {
      const newFarms = [...prevFarms];
      const currentFarm = { ...newFarms[farmIndex] };

      const newSampleData = [...currentFarm.sampleData];
      const currentSample = {
        ...newSampleData[sampleIndex],
        [sampleField]: value,
      };
      newSampleData[sampleIndex] = currentSample;
      currentFarm.sampleData = newSampleData;

      const results = calculateCabbageResults(currentFarm);

      currentFarm.totalSurveyTotal = results.totalSurveyTotal;
      currentFarm.totalSumCategories = results.totalSumCategories;
      currentFarm.damageRatio = results.damageRatio;
      currentFarm.rawDamageRate = results.rawDamageRate;
      currentFarm.finalDamageRate = results.finalDamageRate;
      currentFarm.error = results.error;
      currentFarm.result = {
        damageRatio: floatOrZero(results.damageRatio),
        rawDamageRate: floatOrZero(results.rawDamageRate),
        finalDamageRate: floatOrZero(results.finalDamageRate),
      };

      newFarms[farmIndex] = currentFarm;
      return newFarms;
    });
  };

  const handleKeyDown = (e, farmIdx, fieldName) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const currentFarm = farms[farmIdx];
      const activeCount = getCabbageSampleCount(currentFarm.damageArea);

      const baseFieldsNav = ["farmId", "cultivatedArea", "damageArea"];
      const finalFields = ["uncompRatio"];
      const sampleFieldsKeys = [
        "surveyTotal",
        "normal",
        ...DAMAGE_LEVELS.map((l) => l.key),
        "total",
        "damageRatio",
      ];

      let fields = [...baseFieldsNav];

      for (let i = 0; i < activeCount; i++) {
        sampleFieldsKeys.forEach((key) => {
          fields.push(`sample${i}_${key}`);
        });
      }
      fields.push(...finalFields);

      const currIdx = fields.indexOf(fieldName);

      if (currIdx !== -1 && currIdx < fields.length - 1) {
        const nextField = fields[currIdx + 1];
        let nextId;

        if (
          baseFieldsNav.includes(nextField) ||
          finalFields.includes(nextField)
        ) {
          nextId = `cabbage_f${farmIdx}_${nextField}`;
        } else {
          nextId = `cabbage_f${farmIdx}_${nextField}`;
        }

        const nextElement = document.getElementById(nextId);

        if (nextElement && !nextElement.disabled) {
          nextElement.focus();

          if (nextField.startsWith("sample")) {
            const nextSampleIdx = parseInt(
              nextField.match(/sample(\d+)/)[1],
              10
            );
            const currentSampleIdx = fieldName.startsWith("sample")
              ? parseInt(fieldName.match(/sample(\d+)/)[1], 10)
              : -1;

            if (nextSampleIdx !== currentSampleIdx) {
              const sampleContainer = document.getElementById(
                `cabbage_scroll_container`
              );
              const nextSampleCard = nextElement.closest(".w-36");
              if (sampleContainer && nextSampleCard) {
                const containerRect = sampleContainer.getBoundingClientRect();
                const cardRect = nextSampleCard.getBoundingClientRect();

                sampleContainer.scrollLeft =
                  sampleContainer.scrollLeft +
                  cardRect.left -
                  containerRect.left;
              }
            }
          }

          nextElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else if (currIdx === fields.length - 1) {
        if (farmIdx < farms.length - 1) {
          setCurrentFarmIndex(farmIdx + 1);
          setTimeout(() => {
            const nextFarmId = `cabbage_f${farmIdx + 1}_farmId`;
            const nextFarmElement = document.getElementById(nextFarmId);
            if (nextFarmElement) {
              nextFarmElement.focus();
              nextFarmElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }, 50);
        } else {
          showToast(`모든 입력 필드를 완료했습니다.`);
        }
      }
    }
  };

  const handleReset = (index) => {
    if (window.confirm(`${index + 1}번 농지 데이터를 초기화하시겠습니까?`)) {
      setFarms((prev) => {
        const next = [...prev];
        next[index] = { ...initialCabbageFarmState };
        return next;
      });
    }
  };

  const handleGlobalReset = () => {
    if (window.confirm("모든 17개 농지의 데이터를 삭제하시겠습니까?")) {
      setFarms(
        Array.from({ length: 17 }, () => ({ ...initialCabbageFarmState }))
      );
      setCurrentFarmIndex(0);
    }
  };

  // CSV 다운로드
  const handleSaveToCSV = () => {
    const headers = [
      "순번",
      "농지번호",
      "실경작면적",
      "피해면적",
      "표본구간수",
      "미보상비율(%)",
      "손해정도비율(%)",
      "최종피해율(%)",
    ];

    const activeFarms = farms.filter(
      (f) => f.farmId || f.cultivatedArea || f.damageArea
    );

    const rows = activeFarms.map((farm, idx) => {
      const r = farm.result || {};

      return [
        idx + 1,
        farm.farmId,
        formatComma(farm.cultivatedArea),
        formatComma(farm.damageArea),
        getCabbageSampleCount(farm.damageArea),
        farm.uncompRatio,
        r.damageRatio ? r.damageRatio.toFixed(2) : "",
        r.finalDamageRate ? r.finalDamageRate.toFixed(2) : "",
      ]
        .map((val) => `"${val}"`)
        .join(",");
    });

    if (rows.length === 0) {
      showToast("저장할 데이터가 없습니다.");
      return;
    }

    const csvContent = "\uFEFF" + [headers.join(","), ...rows].join("\n");
    try {
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `배추피해율조사_${surveyDate}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast("CSV 파일 다운로드가 시작되었습니다.");
    } catch (e) {
      showToast("다운로드 실패: 브라우저 보안 설정을 확인하세요.");
    }
  };

  // 텍스트 복사 (기존 유지)
  const handleCopy = () => {
    let textContent = `[배추 피해율 조사 - ${surveyDate}]\n\n`;
    const activeFarms = farms.filter(
      (f) => f.farmId || f.cultivatedArea || f.result
    );
    if (activeFarms.length === 0) {
      showToast("입력된 농지 데이터가 없습니다.");
      return;
    }
    activeFarms.forEach((farm, fIdx) => {
      const r = farm.result || {};
      const activeCount = getCabbageSampleCount(farm.damageArea);

      textContent += `■ 농지 ${fIdx + 1} (${farm.farmId || "번호없음"})\n`;
      textContent += `- 면적: 실경작 ${farm.cultivatedArea}m², 피해 ${farm.damageArea}m² (표본 ${activeCount}개)\n`;
      textContent += `- 미보상비율: ${farm.uncompRatio}%\n`;
      textContent += `- 손해정도비율: ${
        r.damageRatio ? r.damageRatio.toFixed(2) : "0.00"
      }%\n`;
      textContent += `- 피해율(미보상 전): ${
        r.rawDamageRate ? r.rawDamageRate.toFixed(2) : "0.00"
      }%\n`;
      textContent += `- 최종 피해율: ${
        r.finalDamageRate ? r.finalDamageRate.toFixed(2) : "0.00"
      }%\n`;

      farm.sampleData.slice(0, activeCount).forEach((sample, sIdx) => {
        let damageString = [];
        DAMAGE_LEVELS.forEach((level) => {
          if (floatOrZero(sample[level.key]) > 0) {
            damageString.push(`${level.label}: ${sample[level.key]}`);
          }
        });
        textContent += `  > 표본 ${sIdx + 1}: 조사계 ${
          sample.surveyTotal
        }, 정상 ${sample.normal}, 피해등급 [${damageString.join(", ")}]\n`;
      });

      textContent += `----------------------------\n`;
    });
    try {
      const textArea = document.createElement("textarea");
      textArea.value = textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showToast("전체 데이터가 복사되었습니다!");
    } catch (err) {
      showToast("복사 실패: " + err);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 font-sans overflow-hidden">
      <div className="bg-white border-b z-20 shadow-sm flex-none">
        <div className="p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <button
                onClick={onBack}
                className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-700"
              >
                <ArrowLeftIcon className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2 text-emerald-700">
                <LeafIcon className="w-6 h-6" />
                {/* 현재 농지 번호 표시 */}
                <h1 className="text-lg font-bold">
                  4. 배추 ({idx + 1}번 농지)
                </h1>
              </div>
            </div>
            <button
              onClick={handleGlobalReset}
              className="text-xs text-gray-500 hover:text-red-500 border border-gray-300 px-3 py-1 rounded bg-gray-50 hover:bg-red-50"
            >
              전체 초기화
            </button>
          </div>
          {/* 저장 메뉴 */}
          <div className="flex gap-2 items-stretch">
            <div className="flex items-center gap-2 bg-emerald-50 p-2 rounded-lg border border-emerald-100 flex-1">
              <CalendarIcon className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-bold text-emerald-800 whitespace-nowrap">
                일자:
              </span>
              <input
                type="date"
                value={surveyDate}
                onChange={(e) => setSurveyDate(e.target.value)}
                className="bg-white border border-emerald-200 rounded px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800 font-medium w-full min-w-0"
              />
            </div>
            <button
              onClick={handleSaveToCSV}
              className="flex-none flex items-center justify-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-sm active:scale-95 transition-all text-sm font-bold whitespace-nowrap"
            >
              <DownloadIcon className="w-4 h-4" /> <span>저장</span>
            </button>
            <button
              onClick={handleCopy}
              className="flex-none flex items-center justify-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-sm active:scale-95 transition-all text-sm font-bold whitespace-nowrap"
            >
              <CopyIcon className="w-4 h-4" />
              <span>복사</span>
            </button>
          </div>
        </div>
      </div>

      {/* 단일 농지 카드 뷰 (화면 중앙에 배치) */}
      <div className="flex-1 overflow-y-auto p-4 flex justify-center items-stretch">
        <div className="w-full max-w-xl flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-200 flex flex-col h-full overflow-hidden">
          <div className="bg-gray-50 p-3 border-b flex justify-between items-center flex-none">
            <div className="flex items-center gap-2">
              <span
                className={`text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center ${
                  isEnabled ? "bg-emerald-600" : "bg-gray-400"
                }`}
              >
                {idx + 1}
              </span>
              <span className="font-bold text-gray-800 text-base">
                농지 입력
              </span>
            </div>
            <div className="flex items-center gap-2">
              {/* 이전 농지 이동 버튼 */}
              <button
                onClick={handlePrevFarm}
                disabled={currentFarmIndex === 0}
                className="text-gray-700 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                title="이전 농지"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              {/* 다음 농지 이동 버튼 */}
              <button
                onClick={handleNextFarm}
                disabled={currentFarmIndex === farms.length - 1}
                className="text-gray-700 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                title="다음 농지"
              >
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleReset(idx)}
                className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-gray-100"
                title="초기화"
              >
                <RefreshCwIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-4 scrollbar-thin">
            <div className="flex flex-col gap-3">
              <InputField
                id={`cabbage_f${idx}_farmId`}
                onKeyDown={(e) => handleKeyDown(e, idx, "farmId")}
                label="1. 농지번호(끝4자리)"
                value={farm.farmId}
                onChange={(val) => updateFarmData(idx, "farmId", val)}
                placeholder="4자리 숫자"
                highlight={isEnabled}
                maxLength={4}
                type="tel"
                inputMode="numeric"
              />
              <InputField
                id={`cabbage_f${idx}_cultivatedArea`}
                onKeyDown={(e) => handleKeyDown(e, idx, "cultivatedArea")}
                label="2. 실경작면적(m²)"
                value={farm.cultivatedArea}
                onChange={(val) => updateFarmData(idx, "cultivatedArea", val)}
                type="number"
                inputMode="decimal"
                placeholder="m²"
                disabled={!isEnabled}
                highlight
              />
              <InputField
                id={`cabbage_f${idx}_damageArea`}
                onKeyDown={(e) => handleKeyDown(e, idx, "damageArea")}
                label="3. 피해면적(m²)"
                value={farm.damageArea}
                onChange={(val) => updateFarmData(idx, "damageArea", val)}
                type="number"
                inputMode="decimal"
                placeholder="m² (표본기준)"
                disabled={!isEnabled}
                highlight
              />
              <InputField
                label="4. 표본구간 수"
                value={activeCount > 0 ? `${activeCount} 구간` : "-"}
                readOnly={true}
                disabled={!isEnabled}
                highlight
                badge="자동"
              />
            </div>
            <div className="border-t border-gray-200 mt-3"></div>

            {/* --- 5. 손해정도 비율 입력 (표본별) --- */}
            <div className="pt-3">
              <h3
                className={`font-bold text-gray-800 mb-2 text-sm flex items-center gap-1 ${
                  !isEnabled ? "opacity-50" : ""
                }`}
              >
                5. 손해정도 비율 입력 (표본별)
              </h3>
              {/* 수평 스크롤 컨테이너 */}
              <div
                id={`cabbage_scroll_container`}
                className="flex overflow-x-auto gap-4 pb-2"
              >
                {farm.sampleData
                  .slice(0, activeCount)
                  .map((sample, sampleIdx) => (
                    <CabbageSampleInput
                      key={sampleIdx}
                      farmIdx={idx}
                      sampleIdx={sampleIdx}
                      sample={sample}
                      updateCabbageSampleData={updateCabbageSampleData}
                      handleKeyDown={handleKeyDown}
                      isEnabled={isEnabled}
                    />
                  ))}
              </div>
            </div>

            <div className="border-t border-gray-200 mt-3"></div>
            <div className="flex flex-col gap-3 pt-3">
              {/* 6. 미보상 비율 (%) 추가 */}
              <InputField
                id={`cabbage_f${idx}_uncompRatio`}
                onKeyDown={(e) => handleKeyDown(e, idx, "uncompRatio")}
                label="6. 미보상 비율 (%)"
                value={farm.uncompRatio}
                onChange={(val) => updateFarmData(idx, "uncompRatio", val)}
                type="number"
                inputMode="decimal"
                placeholder="%"
                disabled={!isEnabled}
              />
            </div>

            <div className="border-t border-gray-200 mt-3"></div>
            <div className="pt-3">
              {farm.error && (
                <div className="text-red-600 text-sm mb-3 flex items-center gap-2 bg-red-50 p-2 rounded border border-red-100 font-medium">
                  <AlertCircleIcon className="w-4 h-4 shrink-0" /> {farm.error}
                </div>
              )}
              {farm.result && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    {/* 7. 최종 피해율로 번호 변경 */}
                    <span className="font-bold text-gray-900 text-base">
                      7. 최종 피해율
                    </span>
                    <span
                      className={`font-extrabold text-xl ${
                        floatOrZero(farm.finalDamageRate) > 20
                          ? "text-red-600"
                          : "text-gray-900"
                      }`}
                    >
                      {farm.finalDamageRate}%
                    </span>
                  </div>
                  <button
                    onClick={() => toggleDetails(idx)}
                    className="w-full mt-3 flex items-center justify-center gap-1 text-xs text-gray-500 hover:bg-gray-100 p-2 rounded transition-colors"
                  >
                    {farm.showDetails ? "계산과정 숨기기" : "계산과정 보기"}
                    {farm.showDetails ? (
                      <ChevronUpIcon className="w-3 h-3" />
                    ) : (
                      <ChevronDownIcon className="w-3 h-3" />
                    )}
                  </button>
                  {farm.showDetails && renderCabbageDetails(farm)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 7. 메인 앱 컴포넌트
// ==========================================
const PlaceholderScreen = ({ title, icon: Icon, onBack }) => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-sans">
    <div className="max-w-md w-full text-center space-y-4">
      <div className="flex items-center justify-center gap-2 text-gray-700">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-100">
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-extrabold text-gray-900">{title}</h1>
      </div>
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-200 text-gray-600 mb-4 shadow-sm">
        <Icon className="w-10 h-10" />
      </div>
      <p className="text-gray-500">{title} 계산기는 준비 중입니다.</p>
    </div>
  </div>
);

// 💥 App 컴포넌트 이름은 "App"으로 유지하고, 하단에 default export를 추가하여
// index.js에서 App을 { App } 대신 App으로 바로 가져올 수 있게 함.
const DamageRateCalculatorApp = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  if (currentScreen === "rice")
    return (
      <>
        <RiceCalculatorScreen
          onBack={() => setCurrentScreen("home")}
          showToast={showToast}
        />
        {toastMessage && (
          <Toast message={toastMessage} onClose={() => setToastMessage("")} />
        )}
      </>
    );

  if (currentScreen === "bean")
    return (
      <>
        <BeanCalculatorScreen
          onBack={() => setCurrentScreen("home")}
          showToast={showToast}
        />
        {toastMessage && (
          <Toast message={toastMessage} onClose={() => setToastMessage("")} />
        )}
      </>
    );

  if (currentScreen === "cabbage")
    return (
      <>
        <CabbageCalculatorScreen
          onBack={() => setCurrentScreen("home")}
          showToast={showToast}
        />
        {toastMessage && (
          <Toast message={toastMessage} onClose={() => setToastMessage("")} />
        )}
      </>
    );

  if (currentScreen === "fruit")
    return (
      <PlaceholderScreen
        title="2. 과수종합"
        icon={TreesIcon}
        onBack={() => setCurrentScreen("home")}
      />
    );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4 shadow-sm">
            <HomeIcon className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            농작물 피해비율 계산
          </h1>
          <p className="text-gray-500">조사할 품목을 선택해주세요</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <button
            onClick={() => setCurrentScreen("rice")}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group aspect-square"
          >
            <div className="bg-blue-50 p-4 rounded-full mb-3 group-hover:bg-blue-100 transition-colors">
              <SproutIcon className="w-8 h-8 text-blue-600" />
            </div>
            <span className="font-bold text-gray-800 text-lg">1. 벼</span>
          </button>
          <button
            onClick={() => setCurrentScreen("fruit")}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:border-green-500 hover:shadow-md transition-all group aspect-square"
          >
            <div className="bg-green-50 p-4 rounded-full mb-3 group-hover:bg-green-100 transition-colors">
              <TreesIcon className="w-8 h-8 text-green-600" />
            </div>
            <span className="font-bold text-gray-800 text-lg">2. 과수종합</span>
          </button>
          <button
            onClick={() => setCurrentScreen("bean")}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:border-amber-500 hover:shadow-md transition-all group aspect-square"
          >
            <div className="bg-amber-50 p-4 rounded-full mb-3 group-hover:bg-amber-100 transition-colors">
              <CircleDotIcon className="w-8 h-8 text-amber-600" />
            </div>
            <span className="font-bold text-gray-800 text-lg">3. 콩</span>
          </button>
          <button
            onClick={() => setCurrentScreen("cabbage")}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:border-emerald-500 hover:shadow-md transition-all group aspect-square"
          >
            <div className="bg-emerald-50 p-4 rounded-full mb-3 group-hover:bg-emerald-100 transition-colors">
              <LeafIcon className="w-8 h-8 text-emerald-600" />
            </div>
            <span className="font-bold text-gray-800 text-lg">4. 배추</span>
          </button>
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">© 2026 Joe</p>
      </div>
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
    </div>
  );
};

export default DamageRateCalculatorApp; // Default Export 추가
