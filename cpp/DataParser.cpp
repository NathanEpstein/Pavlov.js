#include "DataParser.h"

DataParser::DataParser(const std::string &filepath) : d_filepath(filepath) {}

std::vector<std::string> DataParser::split(const std::string &s, char delim) const {
    std::vector<std::string> elems;
    std::stringstream ss;

    ss.str(s);
    std::string item;
    while (getline(ss, item, delim)) {
        elems.push_back(item);
    }
    return elems;
}

observation DataParser::parse_obs_line(const std::string &obs_string) const {
  std::vector<std::string> obs_elems = split(obs_string, ',');
  observation o;

  int index = 0;
  while(index < obs_elems.size() - 3) {
    state_transition st;
    st.state = obs_elems[index];
    st.action = obs_elems[index + 1];
    st.state_ = obs_elems[index + 2];

    o.state_transitions.push_back(st);
    index += 2;
  }

  o.reward = atof(obs_elems[index + 1].c_str());
  return o;
}

void DataParser::parse_observations(std::vector<observation> &obs) const {
  std::ifstream infile(d_filepath);
  std::string line;
  while(getline(infile, line)) {
    obs.push_back(parse_obs_line(line));
  }
}
