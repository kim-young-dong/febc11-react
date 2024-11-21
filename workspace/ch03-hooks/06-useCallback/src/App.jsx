import { useState, useMemo } from "react";

import Header from "@components/Header";

const data = {
  _id: 2,
  price: 125000,
  shippingFees: 3000,
  name: "나이키 잼",
  quantity: 35,
  buyQuantity: 10,
  mainImage: "/files/00-nike/NIKE_JAM_01.jpg",
  content:
    "나이키가 세계적인 무대에 오르는 브레이크 댄서를 위해 제작한 첫 신발인 잼과 함께 몸과 마음, 정신을 하나로 만들어 보세요. 신발의 모든 디테일을 꼼꼼히 제작했기 때문에 자신 있게 사이퍼에 도전할 수 있습니다. 유연하고 내구성이 뛰어난 갑피가 몸을 따라 움직이며, 중창의 텍스처 처리된 핸드 그립 덕분에 공중에서 신발을 쉽게 잡을 수 있습니다. 그리고 위아래가 뒤집힌 로고를 배치해 프리즈 동작을 할 때 로고가 똑바로 보이는 재미를 더했죠.",
};

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  // useMemo를 사용하여 소수 판별 함수를 최적화
  const isPrime = useMemo(() => {
    if (age < 2) return false;
    for (let i = 2; i <= Math.sqrt(age); i++) {
      if (age % i === 0) return false;
    }

    return true;
  }, [age]);

  return (
    <>
      <Header title="02 useEffect" />
      <div>
        name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        age:{" "}
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>{isPrime ? "isPrime" : "notPrime"}</p>
      </div>
    </>
  );
}

export default App;
