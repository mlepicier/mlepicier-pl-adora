import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { Playbooks } from '@/pages/Playbooks';
import { PlaybookDetail } from '@/pages/PlaybookDetail';
import { Pricing } from '@/pages/Pricing';
import { FreeGPT } from '@/pages/FreeGPT';
import { About } from '@/pages/About';
import { FAQ } from '@/pages/FAQ';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="playbooks" element={<Playbooks />} />
          <Route path="playbook/:slug" element={<PlaybookDetail />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="free-gpt" element={<FreeGPT />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
