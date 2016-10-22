#include "DataParser.h"

DataParser::DataParser(const string &filepath) {
  d_filepath = filepath;
}

vector<string> DataParser::split(const string &s, char delim) {
    vector<string> elems;
    stringstream ss;

    ss.str(s);
    string item;
    while (getline(ss, item, delim)) {
        elems.push_back(item);
    }
    return elems;
}

observation DataParser::parse_obs_line(const string &obs_string) {
  vector<string> obs_elems = split(obs_string, ',');
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

void DataParser::parse_observations(vector<observation> &obs) {
  ifstream infile(d_filepath);
  string line;
  while(getline(infile, line)) {
    obs.push_back(parse_obs_line(line));
  }
}